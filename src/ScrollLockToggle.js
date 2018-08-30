// @flow

import React, { Fragment } from 'react';
import ScrollLock from './ScrollLock';
import type { Props } from './types';

type TglPrps = Props & { isActive: boolean };

export const ScrollLockToggle = ({ isActive, children, ...props }: TglPrps) => (
  <Fragment>
    {isActive ? <ScrollLock {...props} /> : null}
    {children}
  </Fragment>
);
