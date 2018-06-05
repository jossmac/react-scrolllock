// @flow
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';

import { makeStyleTag, sheetForTag, injectStyles, insertStyleTag } from './utils';

export const SHEET_ID = 'react-scrolllock-stylesheet';
type Props = { styles: string };

export default class Sheet extends PureComponent<Props> {
  sheet: CSSStyleSheet | null;
  componentDidMount() {
    if (!canUseDOM) return;

    // ensure there's only ever ONE stylesheet for react-scrolllock
    const existingLock = document.querySelector(`#${SHEET_ID}`);
    if (existingLock) return;

    this.addSheet();
  }
  addSheet = () => {
    const { styles } = this.props;

    const sheet = makeStyleTag(SHEET_ID);
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

  render() {
    return null;
  }
}
