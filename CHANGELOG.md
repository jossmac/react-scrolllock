# react-scrolllock

## 5.0.1

### Patch Changes

- [`8adf1dc2`](https://github.com/jossmac/react-scrolllock/commit/8adf1dc2023117d028680781851b539b5975d9b4) [#69](https://github.com/jossmac/react-scrolllock/pull/69) Thanks [@flexdinesh](https://github.com/flexdinesh) - Fix: consider body margin when calculating scrollbar width

## 5.0.0

### Major Changes

- [`09bb3bed`](https://github.com/jossmac/react-scrolllock/commit/09bb3bed40b50050cc068fda2181d0a5f999d9fa) [#52](https://github.com/jossmac/react-scrolllock/pull/52) Thanks [@jossmac](https://github.com/jossmac) - remove "react-node-resolver"
  - `TouchScrollable` (and by composition `ScrollLock`) now support function or element children

### Minor Changes

- [`fea65425`](https://github.com/jossmac/react-scrolllock/commit/fea654251f3293f8dd36347bf71355c0d4005712) [#48](https://github.com/jossmac/react-scrolllock/pull/48) Thanks [@erickskrauch](https://github.com/erickskrauch) - Add TS typings

### Patch Changes

- [`b7a74eb4`](https://github.com/jossmac/react-scrolllock/commit/b7a74eb425a18011f014aeb39ad7eef3ea46057a) [#37](https://github.com/jossmac/react-scrolllock/pull/37) Thanks [@jossmac](https://github.com/jossmac) - Touchmove Propagation

  - Check target's "scrollability" before allowing scroll to pass through

- Bump dependencies - Thanks [@dependabot](https://github.com/dependabot):
  - `handlebars` from 4.0.11 to 4.5.3 ([#65](https://github.com/jossmac/react-scrolllock/pull/65))
  - `merge` from 1.2.0 to 1.2.1 ([#64](https://github.com/jossmac/react-scrolllock/pull/64))
  - `webpack-dev-server` from 3.1.3 to 3.1.11 ([#63](https://github.com/jossmac/react-scrolllock/pull/63))
  - `react-dom` from 16.3.2 to 16.3.3 ([#62](https://github.com/jossmac/react-scrolllock/pull/62))
  - `tar` from 2.2.1 to 2.2.2 ([#60](https://github.com/jossmac/react-scrolllock/pull/60))
  - `stringstream` from 0.0.5 to 0.0.6 ([#53](https://github.com/jossmac/react-scrolllock/pull/53))
  - `macaddress` from 0.2.8 to 0.2.9 ([#54](https://github.com/jossmac/react-scrolllock/pull/54))
  - `sshpk` from 1.13.1 to 1.16.1 ([#55](https://github.com/jossmac/react-scrolllock/pull/55))
  - `lodash` from 4.17.4 to 4.17.15 ([#56](https://github.com/jossmac/react-scrolllock/pull/56))
  - `eslint-utils` from 1.3.1 to 1.4.3 ([#57](https://github.com/jossmac/react-scrolllock/pull/57))
  - `extend` from 3.0.1 to 3.0.2 ([#61](https://github.com/jossmac/react-scrolllock/pull/61))
  - `fstream` from 1.0.11 to 1.0.12 ([#58](https://github.com/jossmac/react-scrolllock/pull/58))
  - `mixin-deep` from 1.3.1 to 1.3.2 ([#59](https://github.com/jossmac/react-scrolllock/pull/59))

## 4.0.0

### Major Changes

- [`db7c3654`](https://github.com/jossmac/react-scrolllock/commit/db7c365476be1cd157c03a708ee4eb210a834d81) [#35](https://github.com/jossmac/react-scrolllock/pull/35) Thanks [@jossmac](https://github.com/jossmac) - Introduce the TouchScrollable component
  - replace the `touchScrollTarget` prop with a new `TouchScrollable` component
  - add support for `isActive` prop on the `ScrollLock` component

### Patch Changes

- [`f6ec80ab`](https://github.com/jossmac/react-scrolllock/commit/f6ec80ab3bc4bf2320e043648f67cbf165ab81f4) [#36](https://github.com/jossmac/react-scrolllock/pull/36) Thanks [@denkristoffer](https://github.com/denkristoffer) - Replace "peer-dependencies" with "peerDependencies"

## 3.0.2

### Patch Changes

- [`5a65c5d2`](https://github.com/jossmac/react-scrolllock/commit/5a65c5d2ff2293931c54403a922b79dd7eb88d7a) [#31](https://github.com/jossmac/react-scrolllock/pull/31) Thanks [@gtallest](https://github.com/gtallest) - Include checks for typeof window for SSR

## 3.0.1

### Patch Changes

- [`7b141a74`](https://github.com/jossmac/react-scrolllock/commit/7b141a7444ce076f1cfef0cc4e20a8900c4112eb) [#29](https://github.com/jossmac/react-scrolllock/pull/29) Thanks [@treshugart](https://github.com/treshugart) - Remove unused import

## 3.0.0

### Major Changes

- [`9e207df5`](https://github.com/jossmac/react-scrolllock/commit/9e207df5c0d19cb5d92014e0cdbfe73c8cac324d) [#28](https://github.com/jossmac/react-scrolllock/pull/28) Thanks [@jossmac](https://github.com/jossmac) - Replace inline styles on the body with an injected stylesheet
  - Resolved the "multi-mount" issue

### Patch Changes

- [`3f9236a9`](https://github.com/jossmac/react-scrolllock/commit/3f9236a960de169f70c9419b400fdd552b397875) [#25](https://github.com/jossmac/react-scrolllock/pull/25) Thanks [@michaeltaranto](https://github.com/michaeltaranto) - Fix: only publish the dist artifacts

## 2.0.7

### Patch Changes

- [`899b73aa`](https://github.com/jossmac/react-scrolllock/commit/899b73aaf33b93f642f32650b72ee3f0e09f99ee) Thanks [@jossmac](https://github.com/jossmac) - replace prop toggle

## 2.0.6

### Patch Changes

- [`c723a1b3`](https://github.com/jossmac/react-scrolllock/commit/c723a1b324a8169d572257dafd08384620de8962) [#23](https://github.com/jossmac/react-scrolllock/pull/23) Thanks [@jossmac](https://github.com/jossmac) - abstract touch listeners and account for window resize

## 2.0.4

### Patch Changes

- [`7bc174b7`](https://github.com/jossmac/react-scrolllock/commit/7bc174b71fc1c1b558028a9f431346453114813c) [#20](https://github.com/jossmac/react-scrolllock/pull/20) Thanks [@jossmac](https://github.com/jossmac) - Add example page

## 2.0.2

### Patch Changes

- [`859b0163`](https://github.com/jossmac/react-scrolllock/commit/859b01633969c940fb62aefb9bbe8f1d1472f4dd) [#19](https://github.com/jossmac/react-scrolllock/pull/19) Thanks [@Blasz](https://github.com/Blasz) - Fix scrollbar padding not being added when body does not have padding-right style

## 2.0.1

### Patch Changes

- [`e669d0d2`](https://github.com/jossmac/react-scrolllock/commit/e669d0d272fbdceb7145d284017c847c106f8fd6) [#15](https://github.com/jossmac/react-scrolllock/pull/15) Thanks [@michaeltaranto](https://github.com/michaeltaranto) - Fix canUseDOM check and raf warning for jest

## 2.0.0

### Major Changes

- [`61de7f04`](https://github.com/jossmac/react-scrolllock/commit/61de7f04edc15dbdbfc915096f6948dbd8e8e541) Thanks [@michaeltaranto](https://github.com/michaeltaranto) - Add build tools and harden implementation

## 1.0.9

### Patch Changes

- [`c2206b43`](https://github.com/jossmac/react-scrolllock/commit/c2206b43c7858ad1cb302603e582282f7bae510c) [#8](https://github.com/jossmac/react-scrolllock/pull/8) Thanks [@neptunian](https://github.com/neptunian) - fix defaultProps so content stops shifting by default

## 1.0.8

### Patch Changes

- [`99f54ed9`](https://github.com/jossmac/react-scrolllock/commit/99f54ed9e8e04611e0d981d733affc8aa7c204f1) [#2](https://github.com/jossmac/react-scrolllock/pull/2) Thanks [@mistadikay](https://github.com/mistadikay) - Fix preventDefault being ignored due to event listeners being passive

  - Fix `preventDefault` being ignored due to event listeners being passive - https://www.chromestatus.com/features/5093566007214080
  - Add property `preventContentJumping` so consumers can opt-out

- [`6e2c1923`](https://github.com/jossmac/react-scrolllock/commit/6e2c1923af2d40fe6d152e9fe932f084573b854f) [#6](https://github.com/jossmac/react-scrolllock/pull/6) Thanks [@aziz](https://github.com/aziz) - canUseDom is a function so it should be called

## 1.0.7

### Patch Changes

- [`612fc7d3`](https://github.com/jossmac/react-scrolllock/commit/612fc7d322946b83a0147bed075d45ac7f3bc59f) [#5](https://github.com/jossmac/react-scrolllock/pull/5) Thanks [@nkpz](https://github.com/nkpz) - fix: use new packages for deprecated APIs
  - package for prop-types
  - package for creating legacy classes

## 1.0.6

### Patch Changes

- [`612fc7d3`](https://github.com/jossmac/react-scrolllock/commit/612fc7d322946b83a0147bed075d45ac7f3bc59f) - resolve prop-type warnings

## 1.0.5

### Patch Changes

- [`5afbcf68`](https://github.com/jossmac/react-scrolllock/commit/5afbcf685ddf6503b60f1048f1031bdd80793016) - fix typo

## 1.0.4

### Patch Changes

- [`236a0c19`](https://github.com/jossmac/react-scrolllock/commit/236a0c19564ef8169b60e40b1a8e1d8676377cff) - allow scroll on provided target

## 1.0.3

### Patch Changes

- [`be609e3c`](https://github.com/jossmac/react-scrolllock/commit/be609e3c3829e5f4d9cdb9a332a95c922f35ada3) - Update method declarations

## 1.0.2

### Patch Changes

- [`d0d13031`](https://github.com/jossmac/react-scrolllock/commit/d0d13031d65d0ca39ec406327446f6734593a067) - all ES5
