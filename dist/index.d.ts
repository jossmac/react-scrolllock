import * as React from 'react';

interface OneChildrenElement {
  children?: React.ReactElement;
}

interface ScrollLockProps extends OneChildrenElement {
  accountForScrollbars?: boolean;
  isActive?: boolean;
}

export default class ScrollLock extends React.Component<ScrollLockProps> {}

export class TouchScrollable extends React.Component<OneChildrenElement> {}
