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

export const Header = props => (
  <header css={{ marginBottom: '2em' }} {...props} />
);
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
export const ScrollArea = ({ height, innerRef, ...props }) => (
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
      paddingLeft: 20,
      paddingRight: 20,
      WebkitOverflowScrolling: 'touch',

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
        boxShadow:
          '0 2px 5px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1)',
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

export const ChevronDown = ({ fg = 'white', bg = 'inherit', style }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <g stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
      <circle fill={bg} cx="12" cy="12" r="10" />
      <path
        d="M8.29175,10.293 C7.90275,10.685 7.90275,11.32 8.29175,11.712 L11.23075,14.677 C11.44875,14.892 11.73075,14.999 12.00975,14.999 C12.28875,14.999 12.56575,14.892 12.77875,14.677 L15.70875,11.722 C16.09675,11.33 16.09675,10.695 15.70875,10.303 C15.31975,9.911 14.69075,9.911 14.30275,10.303 L12.00475,12.62 L9.69775,10.293 C9.50375,10.098 9.24875,10 8.99475,10 C8.73975,10 8.48475,10.098 8.29175,10.293 Z"
        fill={fg}
      />
    </g>
  </svg>
);
