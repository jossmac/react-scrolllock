'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = exports.listenerOptions = undefined;
exports.preventTouchMove = preventTouchMove;
exports.allowTouchMove = allowTouchMove;
exports.preventInertiaScroll = preventInertiaScroll;
exports.isTouchDevice = isTouchDevice;
exports.camelToKebab = camelToKebab;
exports.parse = parse;
exports.getPadding = getPadding;
exports.getWindowHeight = getWindowHeight;
exports.getDocumentHeight = getDocumentHeight;
exports.makeStyleTag = makeStyleTag;
exports.injectStyles = injectStyles;
exports.insertStyleTag = insertStyleTag;

var _exenv = require('exenv');

var listenerOptions = exports.listenerOptions = {
  capture: false,
  passive: false
};

// ==============================
// Touch Helpers
// ==============================

function preventTouchMove(e) {
  e.preventDefault();

  return false;
}

function allowTouchMove(e) {
  var target = e.currentTarget;

  if (target.scrollHeight > target.clientHeight || target.scrollWidth > target.clientWidth) {
    e.stopPropagation();
    return true;
  }

  e.preventDefault();
  return false;
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  if (!_exenv.canUseDOM) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// ==============================
// Misc.
// ==============================

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function parse(val) {
  return isNaN(val) ? val : val + 'px';
}

// Take a list of functions and return a function that applies the list of
// functions from left to right

var pipeFns = function pipeFns(a, b) {
  return function () {
    return b(a.apply(undefined, arguments));
  };
};
var pipe = exports.pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(pipeFns);
};

// ==============================
// Document Helpers
// ==============================

function getPadding() {
  if (!_exenv.canUseDOM) return 0;

  var paddingRight = parseInt(window.getComputedStyle(document.body).paddingRight, 10);
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  return paddingRight + scrollbarWidth;
}

function getWindowHeight() {
  var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (_exenv.canUseDOM) {
    return window.innerHeight * multiplier;
  }
}

function getDocumentHeight() {
  if (_exenv.canUseDOM) {
    return document.body.clientHeight;
  }
}

// ==============================
// Style Sheets
// ==============================

function makeStyleTag() {
  if (!_exenv.canUseDOM) return;

  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-react-scrolllock', '');

  return tag;
}
function injectStyles(tag, css) {
  if (!_exenv.canUseDOM) return;

  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  if (!_exenv.canUseDOM) return;

  var head = document.head || document.getElementsByTagName('head')[0];

  head.appendChild(tag);
}