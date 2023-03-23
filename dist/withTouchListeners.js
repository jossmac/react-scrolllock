'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withTouchListeners;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _exenv = require('exenv');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Mobile Safari ignores { overflow: hidden } declaration on the body,
// so we have to prevent touchmove events via JS
function withTouchListeners(WrappedComponent) {
    return function (_PureComponent) {
        _inherits(TouchProvider, _PureComponent);

        function TouchProvider() {
            _classCallCheck(this, TouchProvider);

            return _possibleConstructorReturn(this, (TouchProvider.__proto__ || Object.getPrototypeOf(TouchProvider)).apply(this, arguments));
        }

        _createClass(TouchProvider, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (!_exenv.canUseDOM || !(0, _utils.isTouchDevice)()) return;

                document.addEventListener('touchmove', _utils.preventTouchMove, _utils.listenerOptions);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (!_exenv.canUseDOM || !(0, _utils.isTouchDevice)()) return;

                document.removeEventListener('touchmove', _utils.preventTouchMove, _utils.listenerOptions);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(WrappedComponent, this.props);
            }
        }]);

        return TouchProvider;
    }(_react.PureComponent);
}