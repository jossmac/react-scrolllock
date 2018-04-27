import React, { Component } from 'react';
import { render } from 'react-dom';

import ScrollLock, { PropertyToggle } from '../../src';
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

// helpers
// ------------------------------

function getHeight() {
  if (window && window.innerHeight) {
    return window.innerHeight * 2;
  }
}

// example
// ------------------------------

class App extends Component {
  state = { isLocked: false, lockCount: 0 };
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, getHeight() / 3.5);
    }, 100);
  }

  toggleLock = () => {
    this.setState(state => ({ isLocked: !state.isLocked }));
  };

  render() {
    const { isLocked } = this.state;
    return (
      <Container height={getHeight()}>
        {/* {isLocked ? <ScrollLock /> : null} */}
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
