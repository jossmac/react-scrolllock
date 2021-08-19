'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withLockSheet;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withLockSheet(WrappedComponent) {
  return function (_PureComponent) {
    _inherits(SheetProvider, _PureComponent);

    function SheetProvider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SheetProvider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SheetProvider.__proto__ || Object.getPrototypeOf(SheetProvider)).call.apply(_ref, [this].concat(args))), _this), _this.addSheet = function () {
        var styles = _this.getStyles();

        var sheet = (0, _utils.makeStyleTag)();
        if (!sheet) return;

        (0, _utils.injectStyles)(sheet, styles);
        (0, _utils.insertStyleTag)(sheet);

        _this.sheet = sheet;
      }, _this.getStyles = function () {
        var accountForScrollbars = _this.props.accountForScrollbars;


        var height = (0, _utils.getDocumentHeight)();
        var paddingRight = accountForScrollbars ? (0, _utils.getPadding)() : null;
        var styles = 'body {\n        box-sizing: border-box !important;\n        overflow: hidden !important;\n        position: relative !important;\n        ' + (height ? 'height: ' + height + 'px !important;' : '') + '\n        ' + (paddingRight ? 'padding-right: ' + paddingRight + 'px !important;' : '') + '\n      }';

        return styles;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SheetProvider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.addSheet();
      }
    }, {
      key: 'removeSheet',
      value: function removeSheet() {
        if (!this.sheet) return;

        // $FlowFixMe
        this.sheet.parentNode.removeChild(this.sheet);
        this.sheet = null;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeSheet();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return SheetProvider;
  }(_react.PureComponent);
}