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
  if (typeof window === 'undefined' || !window) return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

export function getPadding() {
  if (typeof window === 'undefined' || !window || !document) return 0;

  const currentPadding = parseInt(document.body.paddingRight, 10) || 0;
  const clientWidth = document.body ? document.body.clientWidth : 0;
  const adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

  return adjustedPadding;
}

export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function getWindowHeight(multiplier = 1) {
  if (typeof window !== 'undefined' && window && window.innerHeight) {
    return window.innerHeight * multiplier;
  }
}

export function getDocumentHeight() {
  if (typeof window !== 'undefined' && document && document.body) {
    return document.body.clientHeight;
  }
}

export function parse(val: number | string): string {
  return isNaN(val) ? val : `${val}px`;
}

// ==============================
// Style Sheets
// ==============================

export function makeStyleTag(id) {
  let tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-react-scrolllock', '');

  return tag;
}
export function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
export function insertStyleTag(tag) {
  const head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(tag);
}
