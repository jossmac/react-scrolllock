import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropToggle from 'react-prop-toggle';

import { ScrollLockToggle, TouchScrollable } from '../../src';
import { getWindowHeight, isTouchDevice } from '../../src/utils';
import {
  Anchor,
  Button,
  ChevronDown,
  Code,
  Container,
  Footer,
  Header,
  Icon,
  Repo,
  Title,
  ScrollArea,
} from './styled';
import './index.css';

// example
// ------------------------------

class App extends Component {
  currentHeight: number;
  state = { chevronOpacity: 0.5, isLocked: false };
  componentDidMount() {
    this.currentHeight = window.innerHeight;

    // center the content
    setTimeout(() => {
      window.scrollTo(0, getWindowHeight(0.6));
    }, 100);
  }

  toggleLock = () => {
    this.setState(state => {
      const isLocked = !state.isLocked;
      const offset = window.innerHeight - this.currentHeight;

      // adjust scroll if the window has been resized
      if (offset && isLocked) {
        window.scrollTo(0, window.pageYOffset + offset);
      }

      this.currentHeight = window.innerHeight;

      return { isLocked };
    });
  };
  getScrollArea = ref => {
    this.scrollArea = ref;
  };
  onScroll = event => {
    const chevronOpacity =
      (this.scrollArea.clientHeight - event.target.scrollTop) / 100 / 2;
    this.setState({ chevronOpacity });
  };

  render() {
    const { chevronOpacity, isLocked } = this.state;

    return (
      <Container height={getWindowHeight(2)}>
        <PropToggle
          isActive={isLocked}
          styles={{ background: 'linear-gradient(165deg, #FFBDAD, #FFEBE5)' }}
        />

        <Header>
          <Icon
            role="img"
            className="animate-dropin"
            style={isLocked ? { bottom: -3 } : null}
          >
            {isLocked ? '🔒' : '🔓'}
          </Icon>
          <div>
            Prevent scroll on <Code>{'<body />'}</Code> with
            <Title>
              {' '}
              <Repo href="https://github.com/jossmac/react-scrolllock">
                react-scrolllock
              </Repo>
            </Title>
          </div>
        </Header>
        <Button onClick={this.toggleLock}>
          {isLocked ? 'Locked' : 'Unlocked'}
        </Button>

        <ScrollLockToggle isActive={isLocked} />
        {isTouchDevice() ? (
          <div style={{ position: 'relative' }}>
            <TouchScrollable>
              <ScrollArea
                height={this.scrollArea && this.scrollArea.clientHeight}
                innerRef={this.getScrollArea}
                onScroll={this.onScroll}
              >
                <p>
                  Wrap an element in the <Code>TouchScrollable</Code> component
                  if you need an area that supports scroll on mobile.
                </p>
                {isLocked ? (
                  <p>
                    This is necessary because the <Code>touchmove</Code> event
                    is explicitly cancelled &mdash; iOS doesn't observe{' '}
                    <Code>{'overflow: hidden;'}</Code> when applied to the{' '}
                    <Code>{'<body />'}</Code> element 😢
                  </p>
                ) : null}
              </ScrollArea>
            </TouchScrollable>
            {isLocked ? (
              <div
                style={{
                  position: 'relative',
                  opacity: chevronOpacity,
                  lineHeight: 1,
                }}
              >
                <ChevronDown
                  style={{ position: 'absolute', marginLeft: -12, top: -12 }}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        <Footer>
          <span> by </span>
          <Anchor
            isLocked={isLocked}
            href="https://twitter.com/jossmackison"
            target="_blank"
          >
            @jossmac
          </Anchor>
        </Footer>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
