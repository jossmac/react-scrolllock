// @flow
import React, { Component } from "react";
import { mount, shallow } from "enzyme";
import Lorem from "react-lorem-component";

import ScrollLock from "../src";
import { LOCK_STYLES, STYLE_KEYS } from "../src/constants";

class Mock extends Component<*> {
  render() {
    return (
      <div>
        <Lorem count={100} />
        <ScrollLock />
      </div>
    );
  }
}

describe("test", () => {
  it("should apply default styles", () => {
    const { style } = document.body;
    const wrapper = mount(<Mock />);

    Object.keys(LOCK_STYLES).forEach(key => {
      expect(style[key]).toBe(LOCK_STYLES[key]);
    });
  });
});

