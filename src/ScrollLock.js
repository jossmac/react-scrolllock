// @flow

import React, { PureComponent, type Element } from 'react';
import { canUseDOM } from 'exenv';

import { getPadding, getDocumentHeight, pipe } from './utils';
import withTouchListeners from './withTouchListeners';
import withLockSheet from './withLockSheet';
import { TouchScrollable } from './TouchScrollable';
import type { Props } from './types';

class ScrollLock extends PureComponent<Props> {
  initialHeight: number;
  static defaultProps = {
    accountForScrollbars: true,
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
    const { children } = this.props;

    return children ? children : null;
  }
}

const compose = pipe(withTouchListeners, withLockSheet);

export default compose(ScrollLock);
