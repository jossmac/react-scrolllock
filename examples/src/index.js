import React, { Component } from 'react';
import { render } from 'react-dom';

import ScrollLock, { PropertyToggle } from '../../src';
import { getWindowHeight } from '../../src/utils';
import './index.css';

// styled components
// ------------------------------

const Container = ({ height, ...props }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: height,
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 420,
      padding: 15,
      textAlign: 'center',
    }}
    {...props}
  />
);
const Anchor = ({ isLocked, ...props }) => (
  <a style={{ color: isLocked ? '#FF5630' : '#36B37E' }} {...props} />
);

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

  render() {
    const { isLocked } = this.state;

    return (
      <Container height={getWindowHeight(2)}>
        {isLocked ? <ScrollLock /> : null}
        {isLocked ? (
          <PropertyToggle styles={{ background: 'linear-gradient(165deg, #FFBDAD, #FFEBE5)' }} />
        ) : null}

        <header>
          <div role="img" className="icon animate-dropin" style={isLocked ? { bottom: -3 } : null}>
            {isLocked ? '🔒' : '🔓'}
          </div>
          <div>
            Prevent scroll on <code>{'<body />'}</code> with
            <h1>
              {' '}
              <a href="https://github.com/jossmac/react-scrolllock">react-scrolllock</a>.
            </h1>
          </div>
        </header>
        <button onClick={this.toggleLock}>{isLocked ? 'Locked' : 'Unlocked'}</button>
        <footer>
          <span> by </span>
          <Anchor isLocked={isLocked} href="https://twitter.com/jossmackison" target="_blank">
            @jossmac
          </Anchor>
        </footer>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
