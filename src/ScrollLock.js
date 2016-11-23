var React = require('react');

/*
	NOTES

	1. Stop content jumping around when overflow is hidden on the body.
	2. Mobile Safari ignores { overflow: hidden } declaration on the body.
	3. Allow scroll on provided target.
*/

var ScrollLock = React.createClass({
	propTypes: {
		scrollTarget: React.PropTypes.object,
	},
	componentDidMount: function () {
		if (!canUseDom) return;

		var scrollTarget = this.props.scrollTarget;
		var scrollbarWidth = window.innerWidth - document.body.clientWidth; // 1.
		var target = document.body;

		target.style.paddingRight = scrollbarWidth + 'px';
		target.style.overflowY = 'hidden';

		target.addEventListener('touchmove', preventTouchMove, false); // 2.

		if (scrollTarget) {
			scrollTarget.addEventListener('touchstart', preventInertiaScroll, false); // 3.
			scrollTarget.addEventListener('touchmove', allowTouchMove, false); // 3.
		}
	},
	componentWillUnmount: function () {
		if (!canUseDom) return;

		var scrollTarget = this.props.scrollTarget;
		var target = document.body;

		target.style.paddingRight = '';
		target.style.overflowY = '';

		target.removeEventListener('touchmove', preventTouchMove, false);

		if (scrollTarget) {
			scrollTarget.removeEventListener('touchstart', preventInertiaScroll, false);
			scrollTarget.removeEventListener('touchmove', allowTouchMove, false);
		}
	},
	render: function () {
		return null;
	}
});

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

module.exports = ScrollLock;
