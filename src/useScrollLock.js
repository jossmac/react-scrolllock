// @flow

import { useEffect, useRef } from 'react';
import {
  clearAllScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from './utilities';

export function useScrollLock(isActive, options) {
  const opts = {
    accountForScrollbars: true,
    ...options,
  };
  const ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      disableBodyScroll(ref.current, opts);

      return () => {
        enableBodyScroll(ref.current);
      };
    }
  }, [isActive]);

  // clean everything up on "beforeunload"
  useUnloadEffect(clearAllScrollLocks);

  return ref;
}

const useUnloadEffect = fn => {
  const cb = useRef();

  cb.current = fn;

  useEffect(() => {
    const onUnload = () => cb.current();

    window.addEventListener('beforeunload', onUnload);

    return () => window.removeEventListener('beforeunload', onUnload);
  }, [cb]);
};
