import React, { Fragment, useEffect, useState } from 'react';
import { render } from 'react-dom';
import PropToggle from 'react-prop-toggle';

import { useScrollLock } from '../../src';
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
  ScrollArea,
  SmallScreen,
  Title,
} from './styled';
import './index.css';

// example
// ------------------------------

function App() {
  const [chevronOpacity, setChevronOpacity] = useState(0.5);
  const [isLocked, setLocked] = useState(false);
  const [scrollHeight, setScrollHeight] = useState('auto');
  const scrollArea = useScrollLock(isLocked);

  const toggleLock = () => setLocked(s => !s);

  const onScroll = event => {
    if (scrollArea.current) {
      const opacity =
        (scrollArea.current.clientHeight - event.target.scrollTop) / 100 / 2;
      setChevronOpacity(opacity);
    }
  };

  const offsetContent = 1000;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, offsetContent);
    }

    setScrollHeight(scrollArea.current.clientHeight);
  }, []);

  return (
    <Fragment>
      <div style={{ height: offsetContent }} />
      <Container>
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
        <Button onClick={toggleLock}>{isLocked ? 'Locked' : 'Unlocked'}</Button>

        <SmallScreen>
          <ScrollArea
            height={scrollHeight}
            ref={scrollArea}
            onScroll={onScroll}
          >
            <p>
              Wrap an element in the <Code>TouchScrollable</Code> component if
              you need an area that supports scroll on mobile.
            </p>
            {isLocked ? (
              <p>
                This is necessary because the <Code>touchmove</Code> event is
                explicitly cancelled &mdash; iOS doesn't observe{' '}
                <Code>{'overflow: hidden;'}</Code> when applied to the{' '}
                <Code>{'<body />'}</Code> element 😢
              </p>
            ) : null}
          </ScrollArea>
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
        </SmallScreen>

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
      <div style={{ height: offsetContent }} />
    </Fragment>
  );
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
