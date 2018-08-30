// @flow
import React, { PureComponent, type Element } from 'react';
import { canUseEventListeners } from 'exenv';
import NodeResolver from 'react-node-resolver';

import { allowTouchMove, preventInertiaScroll, listenerOptions } from './utils';

type Props = {
  // allow touch-scroll on this element
  children?: Element<*>,
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
    return <NodeResolver innerRef={this.getScrollableArea} {...this.props} />;
  }
}
