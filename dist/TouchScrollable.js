'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchScrollable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _exenv = require('exenv');

var _utils = require('./utils');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchScrollable = exports.TouchScrollable = function (_PureComponent) {
  _inherits(TouchScrollable, _PureComponent);

  function TouchScrollable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TouchScrollable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchScrollable.__proto__ || Object.getPrototypeOf(TouchScrollable)).call.apply(_ref, [this].concat(args))), _this), _this.getScrollableArea = function (ref) {
      _this.scrollableArea = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TouchScrollable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!_exenv.canUseEventListeners) return;

      this.scrollableArea.addEventListener('touchstart', _utils.preventInertiaScroll, _utils.listenerOptions);
      this.scrollableArea.addEventListener('touchmove', _utils.allowTouchMove, _utils.listenerOptions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!_exenv.canUseEventListeners) return;

      this.scrollableArea.removeEventListener('touchstart', _utils.preventInertiaScroll, _utils.listenerOptions);
      this.scrollableArea.removeEventListener('touchmove', _utils.allowTouchMove, _utils.listenerOptions);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return typeof children === 'function' ? children(this.getScrollableArea) : (0, _react.cloneElement)(children, _extends({ ref: this.getScrollableArea }, rest));
    }
  }]);

  return TouchScrollable;
}(_react.PureComponent);