import { ReactElement, ReactNode, RefObject, cloneElement } from 'react';
import { OptionsType, useScrollLock } from './useScrollLock';

type ChildrenType =
  | ReactElement
  | ((scrollableElementRef: RefObject<HTMLElement>) => ReactNode);

export type ScrollLockProps = {
  // Allow scroll on this element (only affects iOS)
  children?: ChildrenType;
  // When true, the lock will be active
  isActive?: boolean;
} & OptionsType;

export function ScrollLock({
  accountForScrollbars = true,
  children,
  isActive = true,
  touchMoveResolver,
  ...props
}: ScrollLockProps) {
  const ref = useScrollLock(isActive, {
    accountForScrollbars,
    touchMoveResolver,
  });

  if (typeof children === 'function') {
    return children(ref);
  }

  return children ? cloneElement(children, { ref, ...props }) : null;
}
