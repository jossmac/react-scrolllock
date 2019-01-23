// @flow

import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';

import { TouchScrollable } from './TouchScrollable';
import withLockSheet from './withLockSheet';

type Props = {
  // whether or not to replace the void left by now absent scrollbars with padding
  accountForScrollbars: boolean,
  // allow touch-scroll on this element
  children?: Element<*>,
  // whether or not the lock is active
  isActive: boolean,
};

class ScrollLock extends PureComponent<Props> {
  initialHeight: number;
  static defaultProps = {
    accountForScrollbars: true,
    isActive: true,
  };
  componentDidMount() {
    if (!canUseDOM) return;
    this.initialHeight = window.innerHeight;
  }
  componentWillUnmount() {
    const offset = window.innerHeight - this.initialHeight;

    // adjust scroll if the window has been resized since the lock was engaged
    // e.g. mobile safari dynamic chrome heights
    if (offset) {
      window.scrollTo(0, window.pageYOffset + offset);
    }

    // reset the initial height in case this scroll lock is used again
    this.initialHeight = window.innerHeight;
  }

  render() {
    const { children, isActive } = this.props;

    return isActive ? <TouchScrollable>{children}</TouchScrollable> : children;
  }
}

// attach the stylesheet and inject styles on [un]mount
const SheetLock = withLockSheet(ScrollLock);

// toggle the lock based on `isActive` prop
const LockToggle = ({ isActive, ...props }: Props) => isActive ? <SheetLock {...props} /> : props.children;

export default LockToggle;
