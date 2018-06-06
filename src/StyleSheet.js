// @flow
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';

import { makeStyleTag, sheetForTag, injectStyles, insertStyleTag } from './utils';

type Props = { styles: string };

export default class Sheet extends PureComponent<Props> {
  sheet: CSSStyleSheet | null;
  componentDidMount() {
    if (!canUseDOM) return;
    this.addSheet();
  }
  addSheet = () => {
    const { styles } = this.props;

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

  render() {
    return null;
  }
}
