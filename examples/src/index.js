import React, { Component } from 'react';
import { render } from 'react-dom';
import ScrollLock from '../../src';

// styled components
// ------------------------------

const Container = props => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 620,
      padding: 10,
    }}
    {...props}
  />
);
const Line = () => <hr style={{ background: '#ddd', border: 0, height: 1, margin: '2em 0' }} />;
const Pre = props => (
  <pre
    style={{
      background: '#f6f6f6',
      borderRadius: 4,
      color: '#444',
      fontFamily: 'Monaco, monospace',
      fontSize: 12,
      lineHeight: 1.5,
      maxWidth: '100%',
      padding: 8,
      overflowX: 'auto',
    }}
    {...props}
  />
);
const Anchor = props => (
  <a style={{ color: 'dodgerBlue', fontSize: '0.75em', marginLeft: '0.5em' }} {...props} />
);

// example
// ------------------------------

class App extends Component {
  state = { isLocked: false };

  toggleLock = () => {
    this.setState(state => ({ isLocked: !state.isLocked }));
  };

  render() {
    const { isLocked } = this.state;
    return (
      <Container>
        <h1>
          🚫 React Scroll Lock
          <Anchor href="https://github.com/jossmac/react-scrolllock">GitHub</Anchor>
        </h1>
        <p>
          Prevent scroll on the <code>{'<body />'}</code> when a component is mounted.
        </p>
        <p>
          <button onClick={this.toggleLock}>{isLocked ? '🔒Locked' : '🔐Unlocked'}</button>
        </p>
        {isLocked ? <ScrollLock /> : null}
        <Line />
        <p>
          Macaroon cupcake powder dragée liquorice fruitcake cookie sesame snaps cake. Cheesecake
          gingerbread cupcake soufflé. Powder sweet roll caramels cake toffee toffee toffee donut
          fruitcake. Soufflé muffin jelly beans sugar plum chocolate bar cake jelly. Gummi bears
          sesame snaps tart cotton candy chupa chups tootsie roll wafer biscuit. Sugar plum caramels
          lollipop sesame snaps cookie icing pie biscuit candy. Fruitcake chocolate bar ice cream
          candy gummi bears jujubes wafer pie. Halvah carrot cake pastry soufflé pudding.
          Marshmallow marshmallow candy canes cotton candy danish jujubes. Sweet cake candy bonbon
          cake jujubes wafer pudding. Cake biscuit ice cream lemon drops powder jujubes liquorice
          tiramisu oat cake. Macaroon carrot cake cookie liquorice chocolate cake chocolate cake
          cake chocolate bar.
        </p>
        <p>
          Sugar plum danish pastry. Cotton candy fruitcake powder. Donut sweet halvah cookie. Muffin
          icing caramels donut sesame snaps macaroon halvah gummi bears chocolate cake. Cheesecake
          jelly beans ice cream bonbon. Jelly-o dragée chocolate bar. Ice cream chocolate donut.
          Fruitcake apple pie jujubes gingerbread dragée ice cream tiramisu. Dragée gingerbread oat
          cake powder gummies muffin jelly beans bear claw. Cheesecake chocolate pie macaroon sweet.
          Marzipan tart chocolate cake candy. Marshmallow powder chocolate wafer liquorice.
        </p>
        <p>
          Candy canes marshmallow jujubes bonbon. Chupa chups liquorice croissant cake oat cake
          macaroon chocolate bar dessert. Sesame snaps halvah chocolate. Cake lemon drops chocolate
          cake jelly jelly beans chocolate bar chupa chups bonbon lollipop. Lollipop dessert jujubes
          wafer macaroon dragée cheesecake sesame snaps. Macaroon dessert ice cream chocolate cake
          macaroon powder. Cake dessert jelly wafer pastry gingerbread croissant croissant chocolate
          cake. Donut donut caramels sweet roll carrot cake. Bonbon chocolate bar cupcake. Sugar
          plum bonbon gummies gingerbread tootsie roll sweet roll carrot cake topping. Cake jujubes
          marshmallow gummies donut lollipop jujubes danish. Danish jujubes lollipop brownie candy
          canes.
        </p>
        <p>
          Gingerbread cheesecake gummies halvah. Sweet roll pudding cupcake sweet soufflé. Danish
          gingerbread brownie halvah soufflé pie cotton candy topping. Pie halvah halvah fruitcake
          candy canes sesame snaps gingerbread. Bear claw pie cake. Croissant halvah chocolate candy
          jelly sweet roll sweet roll. Marzipan marshmallow wafer marzipan cookie fruitcake
          gingerbread chupa chups pastry. Gummies icing icing ice cream icing. Chocolate cake
          liquorice powder jelly beans chocolate cake toffee sugar plum. Carrot cake pudding halvah
          sweet lemon drops liquorice. Muffin pastry donut ice cream chocolate bar. Soufflé pie cake
          croissant cheesecake. Cotton candy muffin caramels.
        </p>
        <p>
          Soufflé topping sweet roll chocolate bear claw croissant caramels. Sesame snaps tiramisu
          topping sweet toffee gummi bears donut lollipop toffee. Cupcake oat cake liquorice
          cheesecake marzipan jujubes. Carrot cake icing tiramisu pastry oat cake. Chocolate cake
          topping chocolate cake. Powder tiramisu toffee tiramisu. Topping chocolate cake pie
          gummies cake carrot cake. Jelly beans brownie toffee sweet roll liquorice tiramisu chupa
          chups soufflé chocolate cake. Candy tootsie roll jelly-o oat cake pastry sugar plum.
          Gummies sweet marzipan biscuit bear claw chupa chups jelly-o jelly beans. Cake oat cake
          bonbon apple pie tootsie roll gingerbread gingerbread. Sesame snaps gummi bears tart jelly
          beans.
        </p>
        <Line />
        <p>
          Made by{' '}
          <a href="https://twitter.com/jossmackison" target="_blank">
            @jossmac
          </a>.
        </p>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
