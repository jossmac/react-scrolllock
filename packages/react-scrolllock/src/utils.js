// Adapted from @willmcpo "body-scroll-lock"
// https://github.com/willmcpo/body-scroll-lock

// Constants & Defaults
// ------------------------------

let axis = null;
let documentListenerAdded = false;
let initialClient = { x: -1, y: -1 };
let locks = [];
let overflowSetting;
let paddingSetting;

// detect passive event support
let hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  const passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    },
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

// event listeners are only bound on iOS devices. other devices respect overflow
// hidden on the body element
const isIosDevice =
  typeof window !== 'undefined' &&
  window.navigator &&
  window.navigator.platform &&
  /iP(ad|hone|od)/.test(window.navigator.platform);

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
const isElementCompletelyScrolled = targetElement => {
  if (targetElement) {
    const totalScroll =
      targetElement[`scroll${axis === 'y' ? 'Height' : 'Width'}`];
    const scrolled = targetElement[`scroll${axis === 'y' ? 'Top' : 'Left'}`];
    const clientSize =
      targetElement[`client${axis === 'y' ? 'Height' : 'Width'}`];

    return totalScroll - scrolled <= clientSize;
  }

  return false;
};

// Event Handling
// ------------------------------

const getTouchTarget = event => {
  const touchTarget = event.targetTouches[0];
  const isSingleTouch = event.targetTouches.length === 1;

  return { touchTarget, isSingleTouch };
};

// returns true if `el` should be allowed to receive touchmove events
const allowTouchMove = el => {
  return locks.some(lock => {
    if (lock.options.touchMoveResolver && lock.options.touchMoveResolver(el)) {
      return true;
    }

    return false;
  });
};

const preventDefault = rawEvent => {
  const e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault,
  // {passive: false }) in disableBodyScroll - so if we provide this opportunity
  // to allowTouchMove, then the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this
  // is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

const handleScroll = (event, targetElement) => {
  const { touchTarget } = getTouchTarget(event);
  const initialPos = initialClient[axis];
  const scrollPos =
    targetElement && targetElement[`scroll${axis === 'y' ? 'Top' : 'Left'}`];
  const clientPos =
    (axis === 'y' ? touchTarget.clientY : touchTarget.clientX) - initialPos;

  if (allowTouchMove(event.target)) {
    return false;
  }

  // element is at the START of its scroll
  if (targetElement && scrollPos === 0 && clientPos > 0) {
    return preventDefault(event);
  }

  // element is at the END of its scroll
  if (isElementCompletelyScrolled(targetElement) && clientPos < 0) {
    return preventDefault(event);
  }

  event.stopPropagation();

  return true;
};

// Inject Styles
// ------------------------------

/*
  Setting overflow on body synchronously in Desktop Safari slows down the
  responsiveness for some reason.
*/

const setBodyStyles = options => {
  setTimeout(() => {
    if (paddingSetting === undefined) {
      const accountForScrollbars = options && options.accountForScrollbars;
      const scrollbarGap =
        window.innerWidth - document.documentElement.clientWidth;

      // only apply padding styles when required
      if (accountForScrollbars && scrollbarGap > 0) {
        paddingSetting = document.body.style.paddingRight;
        document.body.style.paddingRight = `${scrollbarGap}px`;
      }
    }

    if (overflowSetting === undefined) {
      overflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  });
};

const restoreBodyStyles = () => {
  setTimeout(() => {
    if (paddingSetting !== undefined) {
      document.body.style.paddingRight = paddingSetting;
      paddingSetting = undefined;
    }

    if (overflowSetting !== undefined) {
      document.body.style.overflow = overflowSetting;
      overflowSetting = undefined;
    }
  });
};

// ==============================
// EXPORTS
// ==============================

// Disable
// ------------------------------

export const disableBodyScroll = (targetElement, options = {}) => {
  if (isIosDevice) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided for devices.',
      );
      return;
    }

    if (!locks.some(lock => lock.targetElement === targetElement)) {
      const lock = { targetElement, options };

      locks = [...locks, lock];

      targetElement.ontouchstart = event => {
        const { touchTarget, isSingleTouch } = getTouchTarget(event);

        if (isSingleTouch) {
          initialClient = {
            x: touchTarget.clientX,
            y: touchTarget.clientY,
          };

          axis = null;
        }
      };

      targetElement.ontouchmove = event => {
        const { touchTarget, isSingleTouch } = getTouchTarget(event);

        if (isSingleTouch) {
          if (!axis) {
            const deltaX = Math.abs(initialClient.x - touchTarget.clientX);
            const deltaY = Math.abs(initialClient.y - touchTarget.clientY);

            axis = deltaX > deltaY ? 'x' : 'y';
          }

          handleScroll(event, targetElement);
        }
      };

      if (!documentListenerAdded) {
        document.addEventListener(
          'touchmove',
          preventDefault,
          hasPassiveEvents ? { passive: false } : undefined,
        );

        documentListenerAdded = true;
      }
    }
  } else {
    setBodyStyles(options);

    const lock = { targetElement, options };

    locks = [...locks, lock];
  }
};

// Enable
// ------------------------------

export const enableBodyScroll = targetElement => {
  if (isIosDevice) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error(
        'enableBodyScroll unsuccessful - targetElement must be provided for IOS devices.',
      );
      return;
    }

    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    locks = locks.filter(lock => lock.targetElement !== targetElement);

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener(
        'touchmove',
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined,
      );

      documentListenerAdded = false;
    }
  } else {
    locks = locks.filter(lock => lock.targetElement !== targetElement);

    if (!locks.length) {
      restoreBodyStyles();
    }
  }
};

// Clear all
// ------------------------------

export const clearAllScrollLocks = () => {
  if (isIosDevice) {
    // clear all locks' handlers, and the references
    locks.forEach(lock => {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener(
        'touchmove',
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined,
      );
      documentListenerAdded = false;
    }

    // reset defaults
    locks = [];
    initialClient = { x: -1, y: -1 };
    axis = null;
  } else {
    restoreBodyStyles();
    locks = [];
  }
};
