'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _exenv = require('exenv');

var _TouchScrollable = require('./TouchScrollable');

var _withLockSheet = require('./withLockSheet');

var _withLockSheet2 = _interopRequireDefault(_withLockSheet);

var _withTouchListeners = require('./withTouchListeners');

var _withTouchListeners2 = _interopRequireDefault(_withTouchListeners);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollLock = function (_PureComponent) {
  _inherits(ScrollLock, _PureComponent);

  function ScrollLock() {
    _classCallCheck(this, ScrollLock);

    return _possibleConstructorReturn(this, (ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).apply(this, arguments));
  }

  _createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!_exenv.canUseDOM) return;
      this.initialHeight = window.innerHeight;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var offset = window.innerHeight - this.initialHeight;

      // adjust scroll if the window has been resized since the lock was engaged
      // e.g. mobile safari dynamic chrome heights
      if (offset) {
        window.scrollTo(0, window.pageYOffset + offset);
      }

      // reset the initial height in case this scroll lock is used again
      this.initialHeight = window.innerHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children ? _react2.default.createElement(
        _TouchScrollable.TouchScrollable,
        null,
        children
      ) : null;
    }
  }]);

  return ScrollLock;
}(_react.PureComponent);

// attach the stylesheet and inject styles on [un]mount


var compose = (0, _utils.pipe)(_withTouchListeners2.default, _withLockSheet2.default);
var SheetLock = compose(ScrollLock);

// toggle the lock based on `isActive` prop
var LockToggle = function LockToggle(props) {
  return props.isActive ? _react2.default.createElement(SheetLock, props) : props.children;
};

LockToggle.defaultProps = {
  accountForScrollbars: true,
  children: null,
  isActive: true
};

exports.default = LockToggle;