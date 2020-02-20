import { useEffect, useRef } from 'react';

import {
  clearAllScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from './utils';

export type OptionsType = {
  // When true, and the lock is active, the gap left by absent scrollbars will be replaced by padding
  accountForScrollbars: boolean;
  // Conditionally target elements that should be immune from the scroll lock (only affects iOS)
  touchMoveResolver?: (element: HTMLElement) => boolean;
};

/**
 * Accepts an active state and options object. Returns a ref object that can
 * optionally be applied to a scrollable element.
 *
 * @see https://github.com/jossmac/react-scrolllock
 */
export function useScrollLock(isActive: boolean, options: OptionsType) {
  const ref = useRef(null);
  const opts = {
    accountForScrollbars: true,
    ...options,
  };

  useEffect(() => {
    const target = ref.current;

    if (isActive) {
      disableBodyScroll(target, opts);

      return () => {
        enableBodyScroll(target);
      };
    }
    /* we only want this hook to run if the value of isActive changes */
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isActive]);

  // clean everything up on "beforeunload"
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
