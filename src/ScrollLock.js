// @flow

import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';

import { TouchScrollable, type ChildrenType } from './TouchScrollable';
import withLockSheet from './withLockSheet';
import withTouchListeners from './withTouchListeners';
import { pipe } from './utils';

type Props = {
  // whether or not to replace the void left by now absent scrollbars with padding
  accountForScrollbars: boolean,
  // allow touch-scroll on this element
  children?: ChildrenType,
  // whether or not the lock is active
  isActive: boolean,
};

class ScrollLock extends PureComponent<Props> {
  initialHeight: number;
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
    const { children } = this.props;

    return children ? <TouchScrollable>{children}</TouchScrollable> : null;
  }
}

// attach the stylesheet and inject styles on [un]mount
const compose = pipe(withTouchListeners, withLockSheet);
const SheetLock = compose(ScrollLock);

// toggle the lock based on `isActive` prop
const LockToggle = (props: Props) =>
  props.isActive ? <SheetLock {...props} /> : props.children;

LockToggle.defaultProps = {
  accountForScrollbars: true,
  children: null,
  isActive: true,
};

export default LockToggle;
