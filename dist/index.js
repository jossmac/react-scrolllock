'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollLock = require('./ScrollLock');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollLock).default;
  }
});

var _TouchScrollable = require('./TouchScrollable');

Object.defineProperty(exports, 'TouchScrollable', {
  enumerable: true,
  get: function get() {
    return _TouchScrollable.TouchScrollable;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }