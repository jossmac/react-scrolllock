import { ReactElement, ReactNode, RefObject } from 'react';

type ChildrenType = ReactElement | ((ref: RefObject<HTMLElement>) => ReactNode);

type Props = {
  // whether or not to replace the void left by now absent scrollbars with padding
  accountForScrollbars: boolean,
  // allow touch-scroll on this element
  children?: ChildrenType,
  // whether or not the lock is active
  isActive: boolean,
};

export function ScrollLock({
  accountForScrollbars,
  children,
  isActive,
  ...props
}: Props) {
  const scrollRef = useScrollLock(isLocked, { accountForScrollbars });

  return typeof children === 'function'
    ? children(scrollRef)
    : cloneElement(children, { ref: scrollRef, ...props });
}
