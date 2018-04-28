// @flow
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';
import { SimpleToggle } from 'react-prop-toggle';

import { getPadding, getDocumentHeight } from './utils';
import withTouchListeners from './withTouchListeners';

let LOCK_COUNT = 0;

type Props = {
  accountForScrollbars: boolean,
};
type TargetStyle = {
  [key: string]: string | null,
};

class ScrollLock extends PureComponent<Props> {
  initialHeight: number;
  static defaultProps = {
    accountForScrollbars: true,
  };
  componentDidMount() {
    LOCK_COUNT++;
    if (canUseDOM) {
      this.initialHeight = window.innerHeight;
    }
  }
  componentWillUnmount() {
    LOCK_COUNT = Math.max(LOCK_COUNT - 1, 0);

    if (canUseDOM) {
      const offset = window.innerHeight - this.initialHeight;

      // adjust scroll if the window has been resized since the lock was engaged
      if (offset) {
        window.scrollTo(0, window.pageYOffset + offset);
      }
    }

    // reset the initial height in case this scroll lock is used again
    this.initialHeight = window.innerHeight;
  }

  render() {
    const { accountForScrollbars } = this.props;

    // avoid overly incrementing padding
    const scrollbarSpacer =
      accountForScrollbars && LOCK_COUNT < 1 ? { 'padding-right': `${getPadding()}px` } : {};

    const height = `${getDocumentHeight()}px`;

    return (
      <SimpleToggle
        styles={{
          'box-sizing': 'border-box', // account for possible declaration `width: 100%;` on body
          overflow: 'hidden',
          position: 'relative',
          height: height,
          ...scrollbarSpacer,
        }}
      />
    );
  }
}

export default withTouchListeners(ScrollLock);
