// @flow
import React, { PureComponent, type ComponentType } from 'react';
import { canUseEventListeners } from 'exenv';

import {
  allowTouchMove,
  isTouchDevice,
  preventInertiaScroll,
  preventTouchMove,
} from './utils';

type Props = {
  touchScrollTarget?: HTMLElement,
};

export default function withTouchListeners(WrappedComponent: ComponentType<*>) {
  return class TouchProvider extends PureComponent<Props> {
    listenerOptions = {
      capture: false,
      passive: false,
    };
    componentDidMount() {
      if (!canUseEventListeners) return;

      const { touchScrollTarget } = this.props;
      const target = document.body;

      // account for touch devices
      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener(
          'touchmove',
          preventTouchMove,
          this.listenerOptions,
        );

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener(
            'touchstart',
            preventInertiaScroll,
            this.listenerOptions,
          );
          touchScrollTarget.addEventListener(
            'touchmove',
            allowTouchMove,
            this.listenerOptions,
          );
        }
      }
    }
    componentWillUnmount() {
      if (!canUseEventListeners) return;

      const { touchScrollTarget } = this.props;
      const target = document.body;

      // remove touch listeners
      if (target && isTouchDevice()) {
        target.removeEventListener(
          'touchmove',
          preventTouchMove,
          this.listenerOptions,
        );

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener(
            'touchstart',
            preventInertiaScroll,
            this.listenerOptions,
          );
          touchScrollTarget.removeEventListener(
            'touchmove',
            allowTouchMove,
            this.listenerOptions,
          );
        }
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
