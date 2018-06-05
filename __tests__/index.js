// @flow
import React, { Component } from 'react';
import { mount } from 'enzyme';
import Lorem from 'react-lorem-component';

import ScrollLock from '../src';
import { SHEET_ID } from '../src/StyleSheet';

const Mock = () => (
  <div>
    <Lorem count={100} />
    <ScrollLock />
  </div>
);

describe('test', () => {
  it('should find the lock sheet', () => {
    const stylesheet = document.querySelector(SHEET_ID);
    const wrapper = mount(<Mock />);

    expect(stylesheet).not.toBe(undefined);
  });
});
