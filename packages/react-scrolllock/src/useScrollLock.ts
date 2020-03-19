import { useEffect, useRef } from 'react';

import {
  clearAllScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from './utils';

export type OptionsType = {
  // When true, and the lock is active, the gap left by absent scrollbars will be replaced by padding
  accountForScrollbars: boolean;
  // When true, the lock is active and scroll will be locked
  isActive: boolean;
  // Conditionally target elements that should be immune from the scroll lock (only affects iOS)
  touchMoveResolver?: (element: HTMLElement) => boolean;
};

/**
 * Accepts an active state and options object. Returns a ref that can optionally
 * be applied to a scrollable element.
 *
 * @see https://github.com/jossmac/react-scrolllock
 */
export function useScrollLock({
  accountForScrollbars = true,
  isActive,
  touchMoveResolver,
}: OptionsType) {
  const ref = useRef(null);
  const options = { accountForScrollbars, touchMoveResolver };

  useEffect(() => {
    const target = ref.current;

    if (isActive) {
      disableBodyScroll(target, options);

      return () => {
        enableBodyScroll(target);
      };
    }
    /* we only want this hook to run if the value of isActive changes */
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isActive]);

  // clean up any residual event handlers on "beforeunload"
  useUnloadEffect(clearAllScrollLocks);

  return ref;
}

const useUnloadEffect = (handler: Function) => {
  const cb = useRef(handler);

  useEffect(() => {
    const onUnload = () => cb.current();

    window.addEventListener('beforeunload', onUnload);

    return () => window.removeEventListener('beforeunload', onUnload);
  }, [cb]);
};
