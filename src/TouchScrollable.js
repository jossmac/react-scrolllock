// @flow
import { cloneElement, PureComponent, type Element, type ElementRef } from 'react';
import { canUseEventListeners } from 'exenv';

import { allowTouchMove, preventInertiaScroll, listenerOptions } from './utils';

export type ChildrenType = Element<*> | ElementRef<*> => Element<*>;

type Props = {
  // allow touch-scroll on this element
  children: ChildrenType,
};

export class TouchScrollable extends PureComponent<Props> {
  scrollableArea: HTMLElement;
  getScrollableArea = (ref: HTMLElement) => {
    this.scrollableArea = ref;
  };
  componentDidMount() {
    if (!canUseEventListeners) return;

    this.scrollableArea.addEventListener(
      'touchstart',
      preventInertiaScroll,
      listenerOptions,
    );
    this.scrollableArea.addEventListener(
      'touchmove',
      allowTouchMove,
      listenerOptions,
    );
  }
  componentWillUnmount() {
    if (!canUseEventListeners) return;
    if (!this.scrollableArea) return;

    this.scrollableArea.removeEventListener(
      'touchstart',
      preventInertiaScroll,
      listenerOptions,
    );
    this.scrollableArea.removeEventListener(
      'touchmove',
      allowTouchMove,
      listenerOptions,
    );
  }
  render() {
    const { children, ...rest } = this.props;

    return typeof children === 'function'
      ? children(this.getScrollableArea)
      : cloneElement(children, { ref: this.getScrollableArea, ...rest });
  }
}
