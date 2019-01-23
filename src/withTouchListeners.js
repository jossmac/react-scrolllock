// @flow
import React, { PureComponent, type ComponentType } from 'react';
import { canUseDOM } from 'exenv';

import { isTouchDevice, preventTouchMove } from './utils';

type Props = {};

export default function withTouchListeners(WrappedComponent: ComponentType<*>) {
    return class TouchProvider extends PureComponent<Props> {
        listenerOptions = {
            capture: false,
            passive: false,
        };
        componentDidMount() {
            if (!canUseDOM) return;
            const target = document.body;

            // account for touch devices
            if (target && isTouchDevice()) {
                // Mobile Safari ignores { overflow: hidden } declaration on the body.
                target.addEventListener('touchmove', preventTouchMove, this.listenerOptions);
            }
        }
        componentWillUnmount() {
            if (!canUseDOM) return;

            const target = document.body;

            // remove touch listeners
            if (target && isTouchDevice()) {
                target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);
            }
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
