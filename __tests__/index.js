import React from 'react';
import { mount } from 'enzyme';

import ScrollLock from '../src';

describe('test', () => {
  it('should find the lock sheet', () => {
    const wrapper = mount(<ScrollLock />);
    const stylesheet = document.querySelector('[data-react-scrolllock]');

    expect(stylesheet).not.toBeNull();
    expect(stylesheet).not.toBeUndefined();

    wrapper.unmount();
  });
  it('should find many lock sheets', () => {
    const wrapper = mount(
      <div>
        <ScrollLock />
        <ScrollLock />
      </div>,
    );
    const stylesheets = document.querySelectorAll('[data-react-scrolllock]');

    expect(stylesheets).toHaveLength(2);

    wrapper.unmount();
  });
});
