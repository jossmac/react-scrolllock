import { canUseDOM } from 'exenv';

export const listenerOptions = {
  capture: false,
  passive: false,
};

// ==============================
// Touch Helpers
// ==============================

export function preventTouchMove(e) {
  e.preventDefault();
}

export function allowTouchMove(e) {
  e.stopPropagation();
}

export function preventInertiaScroll() {
  const top = this.scrollTop;
  const totalScroll = this.scrollHeight;
  const currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
export function isTouchDevice() {
  if (!canUseDOM) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// ==============================
// Misc.
// ==============================

export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function parse(val: number | string): string {
  return isNaN(val) ? val : `${val}px`;
}

// Take a list of functions and return a function that applies the list of
// functions from left to right

const _pipe = (a, b) => (...args) => b(a(...args));
export const pipe = (...fns) => fns.reduce(_pipe);

// ==============================
// Document Helpers
// ==============================

export function getPadding() {
  if (!canUseDOM) return 0;

  const currentPadding = parseInt(document.body.paddingRight, 10) || 0;
  const clientWidth = document.body ? document.body.clientWidth : 0;
  const adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

  return adjustedPadding;
}

export function getWindowHeight(multiplier = 1) {
  if (canUseDOM) {
    return window.innerHeight * multiplier;
  }
}

export function getDocumentHeight() {
  if (canUseDOM) {
    return document.body.clientHeight;
  }
}

// ==============================
// Style Sheets
// ==============================

export function makeStyleTag(id) {
  if (!canUseDOM) return;

  let tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-react-scrolllock', '');

  return tag;
}
export function injectStyles(tag, css) {
  if (!canUseDOM) return;

  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
export function insertStyleTag(tag) {
  if (!canUseDOM) return;

  const head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(tag);
}
