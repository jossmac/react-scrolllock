import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

import { useScrollLock } from 'react-scrolllock';

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
} from '../styled';

// example
// ------------------------------

export default function App() {
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

  // prepare page with measurements
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, offsetContent);
    }

    setScrollHeight(scrollArea.current.clientHeight);
  }, [scrollArea]);

  // toggle behaviours when locked state changes
  useEffect(() => {
    if (isLocked) {
      document.body.style.background =
        'linear-gradient(165deg, #FFBDAD, #FFEBE5)';

      return () => {
        console.log('remove background');

        document.body.style.background = null;
      };
    }
  }, [isLocked]);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <title>React ScrollLock</title>
        <meta
          name="description"
          content="Prevent page scroll when your component is mounted."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jossmac" />
        <meta name="og:title" content="React ScrollLock" />
        <meta
          name="og:url"
          content="https://jossmac.github.io/react-scrolllock"
        />
        <meta
          name="og:description"
          content="Prevent page scroll when your component is mounted."
        />
      </Head>
      <div style={{ height: offsetContent }} />
      <Container>
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

      <Global
        styles={css`
          body {
            -moz-font-feature-settings: 'liga' on;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            background-color: #e3fcef;
            background-position: left top;
            background-repeat: no-repeat;
            background: linear-gradient(165deg, #abf5d1, #e3fcef);
            color: #253858;
            font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
              Helvetica, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin: 0;
            padding: 0;
            text-rendering: optimizeLegibility;
          }
          p > a,
          p > a:hover,
          p > a:visited {
            color: #2684ff;
          }
          p > code {
            white-space: nowrap;
          }
          p,
          ul,
          ol {
            line-height: 1.5;
          }
          h1,
          h2,
          h3,
          h4,
          h5 {
            color: #091e42;
          }
          h6 {
            color: #777;
            margin-bottom: 0.25em;
            text-transform: uppercase;
          }
          a {
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
          }
          a:hover {
            outline: 0;
            text-decoration: underline;
          }
        `}
      />
    </Fragment>
  );
}
