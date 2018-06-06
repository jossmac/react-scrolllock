// @flow
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';
import { SimpleToggle } from 'react-prop-toggle';

import { getPadding, getDocumentHeight } from './utils';
import withTouchListeners from './withTouchListeners';
import StyleSheet from './StyleSheet';

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
  getStyles = () => {
    const { accountForScrollbars } = this.props;

    const height = getDocumentHeight();
    const paddingRight = accountForScrollbars ? getPadding() : null;
    const styles = `body {
      box-sizing: border-box !important;
      overflow: hidden !important;
      position: relative !important;
      ${height ? `height: ${height}px !important;` : ''}
      ${paddingRight ? `padding-right: ${paddingRight}px !important;` : ''}
    }`;

    return styles;
  };

  render() {
    return <StyleSheet styles={this.getStyles()} />;
  }
}

export default withTouchListeners(ScrollLock);
