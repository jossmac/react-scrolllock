import React, { Component } from 'react';
import { render } from 'react-dom';
import PropToggle from 'react-prop-toggle';

import ScrollLock from '../../src';
import { getWindowHeight } from '../../src/utils';
import {
  Anchor,
  Button,
  Code,
  Container,
  Footer,
  Header,
  Icon,
  Repo,
  Title,
  TouchScrollArea,
} from './styled';
import './index.css';

// example
// ------------------------------

class App extends Component {
  currentHeight: number;
  state = { isLocked: false, lockCount: 0 };
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

  render() {
    const { isLocked } = this.state;

    return (
      <Container height={getWindowHeight(2)}>
        {isLocked ? <ScrollLock touchScrollTarget={this.scrollArea} /> : null}
        <PropToggle
          isActive={isLocked}
          styles={{ background: 'linear-gradient(165deg, #FFBDAD, #FFEBE5)' }}
        />

        <Header>
          <Icon role="img" className="animate-dropin" style={isLocked ? { bottom: -3 } : null}>
            {isLocked ? '🔒' : '🔓'}
          </Icon>
          <div>
            Prevent scroll on <Code>{'<body />'}</Code> with
            <Title>
              {' '}
              <Repo href="https://github.com/jossmac/react-scrolllock">react-scrolllock</Repo>
            </Title>
          </div>
        </Header>
        <Button onClick={this.toggleLock}>{isLocked ? 'Locked' : 'Unlocked'}</Button>

        <TouchScrollArea
          innerRef={this.getScrollArea}
          height={this.scrollArea && this.scrollArea.clientHeight}
        >
          <p>
            Provide an element to the <Code>touchScrollTarget</Code> property if you need an area
            that supports scroll on mobile.
          </p>
          {isLocked ? (
            <p>
              This is necessary because the <Code>touchmove</Code> event is explicitly cancelled
              &mdash; iOS doesn't observe <Code>{'overflow: hidden;'}</Code> when applied to the{' '}
              <Code>{'<body />'}</Code> element 😢
            </p>
          ) : null}
        </TouchScrollArea>

        <Footer>
          <span> by </span>
          <Anchor isLocked={isLocked} href="https://twitter.com/jossmackison" target="_blank">
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
