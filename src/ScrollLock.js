var React = require('react');

/*
	NOTES

	1. Stop content jumping around when overflow is hidden on the body.
	2. Mobile Safari ignores { overflow: hidden } declaration on the body.
*/

class ScrollLock extends React.Component {
	constructor () {
		super();
		this.locked = false;
	}

	componentWillMount () {
		if (!canUseDom) return;

		const scrollbarWidth = window.innerWidth - document.body.clientWidth; // 1.
		const target = document.body;

		target.addEventListener('touchmove', preventTouchMove, false); // 2.

		target.style.paddingRight = scrollbarWidth + 'px';
		target.style.overflowY = 'hidden';

		this.locked = true;
	}

	componentWillUnmount () {
		if (!canUseDom) return;

		const target = document.body;

		target.removeEventListener('touchmove', preventTouchMove, false);

		target.style.paddingRight = '';
		target.style.overflowY = '';

		this.locked = false;
	}

	render () {
		return null;
	}
}

function preventTouchMove (e) {
	e.preventDefault();
};

function canUseDom () {
	return !!(
		typeof window !== 'undefined'
		&& window.document
		&& window.document.createElement
	);
};

module.exports = ScrollLock;
