/** @jsx jsx */

import { forwardRef, useState } from 'react';
import { Global, jsx } from '@emotion/core';

import { ScrollLock, useScrollLock } from 'react-scrolllock';

const touchMoveResolver = el => el.tagName === 'TEXTAREA';

export default function Examples() {
  const [hookLocked, setHookLocked] = useState(false);
  const [componentLocked, setComponentLocked] = useState(false);
  const scrollArea = useScrollLock({ isActive: hookLocked, touchMoveResolver });

  return (
    <Container>
      <Global
        styles={{
          html: { padding: 20 },
          body: { padding: 20 },
        }}
      />

      <h1>Examples</h1>

      <h2>Hook {hookLocked && '✔'}</h2>
      <button onClick={() => setHookLocked(s => !s)}>
        {hookLocked ? 'Unlock' : 'Lock'}
      </button>
      <textarea
        rows="3"
        css={{
          boxSizing: 'border-box',
          display: 'block',
          fontSize: 'inherit',
          width: '100%',
        }}
        defaultValue="Chocolate apple pie gummi bears wafer jelly beans fruitcake lollipop. Bonbon tart sweet roll oat cake danish bear claw cake oat cake liquorice. Sesame snaps topping jelly. Jelly-o cupcake chupa chups pastry powder jelly beans candy candy canes. Donut sugar plum oat cake. Jujubes danish sugar plum. Caramels cotton candy halvah macaroon biscuit cotton candy oat cake donut macaroon. Fruitcake bear claw gummi bears tart jelly. Powder jelly-o tiramisu. Wafer cookie biscuit. Gummies sugar plum caramels wafer cake fruitcake powder icing. Fruitcake candy lemon drops chocolate bar."
      />
      <ScrollArea ref={scrollArea} />

      <h2>Component {componentLocked && '✔'}</h2>
      <button onClick={() => setComponentLocked(s => !s)}>
        {componentLocked ? 'Unlock' : 'Lock'}
      </button>
      <ScrollLock isActive={componentLocked}>
        <ScrollArea />
      </ScrollLock>

      <div css={{ height: 2000, width: 2000 }} />
    </Container>
  );
}

// Helpers
// ------------------------------

const Container = props => (
  <div
    css={{
      maxWidth: 640,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: 20,
      paddingRight: 20,
    }}
    {...props}
  />
);

const ScrollArea = forwardRef((_unusedProps, ref) => (
  <div
    ref={ref}
    css={{
      background: 'wheat',
      height: 200,
      overflowY: 'auto',
      marginTop: '1.2em',
      padding: '1em',
    }}
  >
    <p>
      Chocolate apple pie gummi bears wafer jelly beans fruitcake lollipop.
      Bonbon tart sweet roll oat cake danish bear claw cake oat cake liquorice.
      Sesame snaps topping jelly. Jelly-o cupcake chupa chups pastry powder
      jelly beans candy candy canes. Donut sugar plum oat cake. Jujubes danish
      sugar plum. Caramels cotton candy halvah macaroon biscuit cotton candy oat
      cake donut macaroon. Fruitcake bear claw gummi bears tart jelly. Powder
      jelly-o tiramisu. Wafer cookie biscuit. Gummies sugar plum caramels wafer
      cake fruitcake powder icing. Fruitcake candy lemon drops chocolate bar.
    </p>
    <p>
      Tootsie roll pastry toffee pudding toffee bonbon croissant wafer chocolate
      cake. Topping chupa chups fruitcake brownie cake pudding croissant jujubes
      carrot cake. Marzipan apple pie cake bonbon. Macaroon jelly-o muffin
      macaroon caramels chocolate bar danish apple pie pudding. Donut cake
      halvah. Cotton candy cupcake ice cream soufflé candy macaroon candy canes
      donut croissant. Danish halvah jelly bonbon bonbon cake wafer croissant.
      Lollipop sweet roll jelly chocolate cake jelly chocolate bonbon chocolate
      bar tart. Cake pastry candy canes. Toffee halvah jelly-o jelly beans
      jelly-o halvah tiramisu. Tootsie roll fruitcake biscuit marzipan cookie
      croissant gummi bears cheesecake. Chupa chups jelly beans cheesecake sweet
      roll topping. Lemon drops gingerbread gummies biscuit biscuit tiramisu
      cake. Candy canes cupcake macaroon ice cream candy canes wafer apple pie
      wafer.
    </p>
    <p>
      Candy canes gingerbread jelly-o. Apple pie chocolate chupa chups danish
      gingerbread wafer jelly marzipan muffin. Muffin sweet danish chocolate
      cake cake. Pie dragée gummi bears oat cake marshmallow tiramisu sugar
      plum. Sweet roll tart pie cake marshmallow. Toffee gingerbread bonbon
      jelly-o caramels. Chupa chups gummi bears carrot cake. Cupcake sesame
      snaps powder. Sesame snaps bear claw sweet roll marzipan candy brownie
      caramels sugar plum cake. Muffin cake candy canes. Soufflé powder ice
      cream croissant candy donut lemon drops topping. Pudding dragée tiramisu
      biscuit wafer jelly-o gummies cupcake. Cotton candy brownie pie lollipop
      liquorice apple pie chocolate cake soufflé halvah. Sweet roll fruitcake
      chupa chups biscuit brownie brownie donut biscuit.
    </p>
    <p>
      Bear claw macaroon carrot cake oat cake oat cake sweet. Brownie tiramisu
      brownie dragée cupcake cookie pastry. Biscuit marzipan halvah caramels.
      Soufflé donut chocolate cake chupa chups biscuit danish cake powder
      halvah. Danish pie donut cake. Sweet roll muffin sesame snaps toffee
      chocolate bar lollipop jelly beans. Cotton candy dragée sweet marzipan
      marzipan. Marzipan lollipop cupcake candy sweet. Croissant gingerbread
      wafer bear claw. Cupcake liquorice biscuit. Soufflé marshmallow cake
      danish muffin tart cotton candy sugar plum. Powder sesame snaps tart
      biscuit. Cookie tart bonbon lemon drops apple pie dragée.
    </p>
    <p>
      Caramels cheesecake lemon drops tootsie roll pastry marzipan. Liquorice
      cake cookie powder wafer candy topping. Gummies croissant chupa chups
      bonbon bonbon wafer chocolate oat cake. Toffee marshmallow candy canes
      jelly-o cotton candy chocolate bar liquorice. Halvah danish macaroon tart
      oat cake lemon drops. Chupa chups tootsie roll oat cake pastry topping
      brownie. Bear claw liquorice tootsie roll soufflé cake cupcake croissant
      lollipop. Muffin chocolate bar carrot cake cheesecake gingerbread dessert
      candy gummies. Muffin dessert danish muffin sweet roll caramels wafer
      tootsie roll sweet. Sweet oat cake sesame snaps ice cream lemon drops
      dragée. Candy canes candy bonbon jelly beans bonbon brownie cupcake
      caramels cupcake. Cake lemon drops topping oat cake biscuit marzipan cake
      carrot cake chocolate. Ice cream brownie tootsie roll apple pie brownie.
    </p>
    <div css={{ height: 1000, width: 1000 }} />
  </div>
));
