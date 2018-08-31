# React Scroll Lock

Prevent scroll on the `<body />` when a component is mounted.

## Install

```bash
yarn add react-scrolllock
```

## Usage

```js
import ScrollLock, { ScrollLockToggle, TouchScrollable } from 'react-scrolllock';

class Modal extends Component {
  render() {
    return (
      <div>
        ...
        // lock children will be wrapped by TouchScrollable
        <ScrollLock>
          <ElementWithOverflowScroll>...</ElementWithOverflowScroll>
        </ScrollLock>

        // or, if you're app structure doesn't allow the above
        <ScrollLock />
        <TouchScrollable>
          <ElementWithOverflowScroll>...</ElementWithOverflowScroll>
        </TouchScrollable>
      </div>
    );
  }
}

// for ease of use there's also an companion component
const Page = ({ someProp }) => (
  <div>
    ...
    <ScrollLockToggle isActive={someProp} />
  </div>
);
```

## Props

#### ScrollLock

| Property                       | Description                                                                    |
| :----------------------------- | :----------------------------------------------------------------------------- |
| accountForScrollbars `boolean` | Default: `true` -- Whether or not to replace the scrollbar width when mounted. |

#### ScrollLockToggle

Inherits `accountForScrollbars` from ScrollLock.

| Property           | Description                                            |
| :----------------- | :----------------------------------------------------- |
| isActive `boolean` | Default: `false` -- Whether or not the lock is active. |

#### TouchScrollable

Wrap an element in the `TouchScrollable` component if you need an area that supports scroll on mobile.

This is necessary because the `touchmove` event is explicitly cancelled &mdash; iOS doesn't observe `overflow: hidden;` when applied to the `<body />` element 😢

| Property                 | Description                                    |
| :----------------------- | :--------------------------------------------- |
| children `React.Element` | **Required** The element that can be scrolled. |
