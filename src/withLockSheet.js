// @flow
import React, { PureComponent, type ComponentType } from 'react';

import {
  getDocumentHeight,
  getPadding,
  injectStyles,
  insertStyleTag,
  makeStyleTag,
} from './utils';
import type { Props } from './types';

export default function withLockSheet(WrappedComponent: ComponentType<*>) {
  return class SheetProvider extends PureComponent<Props> {
    sheet: CSSStyleSheet | null;
    componentDidMount() {
      this.addSheet();
    }
    addSheet = () => {
      const styles = this.getStyles();

      const sheet = makeStyleTag();
      if (!sheet) return;

      injectStyles(sheet, styles);
      insertStyleTag(sheet);

      this.sheet = sheet;
    };
    removeSheet() {
      if (!this.sheet) return;

      // $FlowFixMe
      this.sheet.parentNode.removeChild(this.sheet);
      this.sheet = null;
    }
    componentWillUnmount() {
      this.removeSheet();
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
      return <WrappedComponent {...this.props} />;
    }
  };
}
