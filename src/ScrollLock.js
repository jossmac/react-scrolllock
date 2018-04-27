// @flow
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';

import { PropertyToggle } from './PropertyToggle';
import {
  allowTouchMove,
  isTouchDevice,
  preventInertiaScroll,
  preventTouchMove,
  getPadding,
} from './utils';

let LOCK_COUNT = 0;

type Props = {
  accountForScrollbars: boolean,
  touchScrollTarget?: HTMLElement,
};
type TargetStyle = {
  [key: string]: string | null,
};

export default class ScrollLock extends PureComponent<Props> {
  originalStyles = {};
  listenerOptions = {
    capture: false,
    passive: false,
  };
  static defaultProps = {
    accountForScrollbars: true,
  };
  componentDidMount() {
    if (!canUseDOM) return;

    const { touchScrollTarget } = this.props;
    const target = document.body;

    // account for touch devices
    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, this.listenerOptions);

      // Allow scroll on provided target
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener(
          'touchstart',
          preventInertiaScroll,
          this.listenerOptions,
        );
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }

    // increment lock count
    LOCK_COUNT++;
  }
  componentWillUnmount() {
    if (!canUseDOM) return;

    // safely decrement lock count
    LOCK_COUNT = Math.max(LOCK_COUNT - 1, 0);

    const { touchScrollTarget } = this.props;
    const target = document.body;

    // remove touch listeners
    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener(
          'touchstart',
          preventInertiaScroll,
          this.listenerOptions,
        );
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
      }
    }
  }

  render() {
    const { accountForScrollbars } = this.props;
    const scrollbarSpacer =
      accountForScrollbars && LOCK_COUNT < 1 ? { 'padding-right': `${getPadding()}px` } : {};

    return (
      <PropertyToggle
        styles={{
          'box-sizing': 'border-box', // account for possible declaration `width: 100%;` on body
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          ...scrollbarSpacer,
        }}
      />
    );
  }
}
