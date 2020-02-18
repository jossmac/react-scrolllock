// @flow

import { useEffect, useRef } from 'react';
import {
  type BodyScrollOptions,
  disableBodyScroll,
  enableBodyScroll,
} from './utilities';

export function useScrollLock(isActive, options: BodyScrollOptions) {
  const opts = {
    reserveScrollbarGap: true,
    ...options,
  };
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isActive) {
      disableBodyScroll(ref.current, opts);

      return () => {
        enableBodyScroll(ref.current);
      };
    }
  }, [isActive]);

  return ref;
}
