/* @jsx glam */
import glam from 'glam';

const gutter = 15;

// styled components
// ------------------------------

export const Container = ({ height, ...props }) => (
  <div
    css={{
      alignItems: 'center',
      display: 'flex ',
      flexDirection: 'column',
      height: height,
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 420,
      padding: gutter,
      textAlign: 'center',
    }}
    {...props}
  />
);
export const Anchor = ({ isLocked, ...props }) => (
  <a css={{ color: isLocked ? '#FF5630' : '#36B37E' }} {...props} />
);
export const Repo = ({ isLocked, ...props }) => (
  <a
    target="_blank"
    css={{
      paddingBottom: 1,
      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      textDecoration: 'none',

      ':hover': {
        borderBottomColor: 'rgba(0, 0, 0, 0.6)',
        textDecoration: 'none',
      },
    }}
    {...props}
  />
);

/*
  ==============================
  Misc.
  ==============================
*/

export const Header = props => <header css={{ marginBottom: '2em' }} {...props} />;
export const Footer = props => <footer css={{ marginTop: '2em' }} {...props} />;
export const Icon = props => (
  <div
    css={{
      fontSize: 64,
      height: 64,
      lineHeight: 1,
      margin: '0 auto 0.5em',
      position: 'relative',
      width: 64,
    }}
    {...props}
  />
);
export const TouchScrollArea = ({ height, innerRef, ...props }) => (
  <div
    ref={innerRef}
    css={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      boxSizing: 'border-box',
      color: '#091e42',
      display: 'none',
      fontSize: '0.8em',
      height: height,
      lineHeight: '1.4',
      marginLeft: -gutter,
      marginRight: -gutter,
      marginTop: '2em',
      overflowY: 'auto',
      paddingLeft: gutter,
      paddingRight: gutter,
      '-webkit-overflow-scrolling': 'touch',

      '@media (max-width: 420px)': {
        display: 'block',
      },
    }}
    {...props}
  />
);
export const Title = props => (
  <h1
    css={{
      display: 'inline',
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '-0.025em',
      margin: 0,
    }}
    {...props}
  />
);
export const Code = props => (
  <code
    css={{
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
      borderRadius: '3px',
      color: '#091e42',
      display: 'inline-block',
      fontFamily: '"Monaco", monospace',
      fontSize: '0.85em',
      lineHeight: '1.4',
      padding: '1px 5px',
    }}
    {...props}
  />
);

export const Button = props => (
  <button
    type="button"
    css={{
      alignItems: 'center',
      background: 'linear-gradient(to bottom, white, #fafbfc)',
      backgroundColor: 'white',
      border: 0,
      borderRadius: 5,
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'flex ',
      fontSize: 24,
      fontWeight: '500',
      justifyContent: 'center',
      outline: 0,
      padding: 20,
      position: 'relative',
      touchAction: 'manipulation',
      width: '100%',

      ':hover': {
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1)',
        transform: 'scale(1.01)',
      },
      ':active': {
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1)',
        transform: 'scale(0.99)',
      },
    }}
    {...props}
  />
);
