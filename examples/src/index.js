import React, { Component } from 'react';
import { render } from 'react-dom';
import ScrollLock from '../../src';

// styled components
// ------------------------------

const Container = ({ height, ...props }) => (
  <div
    style={{
      height: height,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 420,
      padding: 10,
    }}
    {...props}
  />
);
const Line = () => <hr style={{ background: '#ddd', border: 0, height: 1, margin: '2em 0' }} />;

function getHeight() {
  if (window && window.innerHeight) {
    return window.innerHeight * 2;
  }
}

// example
// ------------------------------

class App extends Component {
  state = { isLocked: false };
  componentDidMount() {
    setTimeout(() => {
      console.log('scroll', getHeight() / 4);
      window.scrollTo(0, getHeight() / 4);
    }, 100);
  }

  toggleLock = () => {
    this.setState(state => ({ isLocked: !state.isLocked }));
  };

  render() {
    const { isLocked } = this.state;
    return (
      <Container height={getHeight()}>
        <h1>
          <span className="icon" role="img">
            🚫
          </span>
          <span>React Scroll Lock</span>
        </h1>
        <p>
          Prevent scroll on the <code>{'<body />'}</code> when mounted.
        </p>
        <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0 }}>
          <button onClick={this.toggleLock}>
            <span role="img" style={{ fontSize: 48, marginRight: 10 }}>
              {isLocked ? '🔒' : '🔐'}
            </span>
            {isLocked ? 'Locked' : 'Unlocked'}
          </button>
        </p>
        {isLocked ? <ScrollLock /> : null}
        <Line />
        <footer>
          <span>
            Made by{' '}
            <a href="https://twitter.com/jossmackison" target="_blank">
              @jossmac
            </a>
          </span>
          <a href="https://github.com/jossmac/react-scrolllock">GitHub</a>
        </footer>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
