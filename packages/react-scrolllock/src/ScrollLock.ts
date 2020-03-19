import { ReactElement, ReactNode, RefObject, cloneElement } from 'react';

import { OptionsType, useScrollLock } from './useScrollLock';

type ChildrenType = ReactElement | ((ref: RefObject<HTMLElement>) => ReactNode);

export type ScrollLockProps = {
  // Allow scroll on this element (only affects iOS)
  children?: ChildrenType;
} & OptionsType;

export function ScrollLock({
  accountForScrollbars = true,
  children,
  isActive = true,
  touchMoveResolver,
  ...props
}: ScrollLockProps) {
  const ref = useScrollLock({
    accountForScrollbars,
    isActive,
    touchMoveResolver,
  });

  if (typeof children === 'function') {
    return children(ref);
  }

  return children ? cloneElement(children, { ref, ...props }) : null;
}
