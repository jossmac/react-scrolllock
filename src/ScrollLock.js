import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
	NOTES

	1. Stop content jumping around when overflow is hidden on the body.
	2. Mobile Safari ignores { overflow: hidden } declaration on the body.
	3. Allow scroll on provided target.
*/

var listenerOptions = { capture: false, passive: false };
export default class ScrollLock extends Component {
	componentDidMount() {
		if (!canUseDom()) return;

		var scrollTarget = this.props.scrollTarget;
		var target = document.body;

		if (this.props.preventContentJumping) {
			var scrollbarWidth = window.innerWidth - document.body.clientWidth; // 1.

			target.style.paddingRight = scrollbarWidth + 'px';
		}
		target.style.overflowY = 'hidden';

		target.addEventListener('touchmove', preventTouchMove, listenerOptions); // 2.

		if (scrollTarget) {
			scrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions); // 3.
			scrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions); // 3.
		}
	}

	componentWillUnmount() {
		if (!canUseDom()) return;

		var scrollTarget = this.props.scrollTarget;
		var target = document.body;

		if (this.props.preventContentJumping) {
			target.style.paddingRight = '';
		}
		target.style.overflowY = '';

		target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

		if (scrollTarget) {
			scrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
			scrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
		}
	}

	render() {
		return null;
	}
}

ScrollLock.propTypes = {
	scrollTarget: PropTypes.object,
	preventContentJumping: PropTypes.bool
}

ScrollLock.defaultProps = {
 preventContentJumping: true
}

function preventTouchMove (e) {
	e.preventDefault();
};

function allowTouchMove (e) {
	e.stopPropagation();
};

function preventInertiaScroll () {
	var top = this.scrollTop;
	var totalScroll = this.scrollHeight;
	var currentScroll = top + this.offsetHeight;

	if (top === 0) {
		this.scrollTop = 1;
	} else if (currentScroll === totalScroll) {
		this.scrollTop = top - 1;
	}
}

function canUseDom () {
	return !!(
		typeof window !== 'undefined'
		&& window.document
		&& window.document.createElement
	);
};
