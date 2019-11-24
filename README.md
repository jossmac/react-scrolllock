# React Scroll Lock

Prevent scroll on the `<body />` when a component is mounted.

## Install

```bash
yarn add react-scrolllock
```

## Usage

```js
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

class Modal extends Component {
  state = { lockScroll: false }
  render() {
    return (
      <div>
        ...
        // the lock accepts a single child element, which supports touch-scrolling.
        <ScrollLock>
          <ElementWithScrollableContent>...</ElementWithScrollableContent>
        </ScrollLock>

        // if your app structure doesn't allow wrapping like above, the `TouchScrollable`
        // component is exposed as a named export.
        <ScrollLock />
        <TouchScrollable>
          <ElementWithScrollableContent>...</ElementWithScrollableContent>
        </TouchScrollable>

        // you can also toggle the lock based on some state.
        <ScrollLock isActive={this.state.lockScroll} />
      </div>
    );
  }
}
```

## Props

#### ScrollLock

| Property                       | Description                                                                    |
| :----------------------------- | :----------------------------------------------------------------------------- |
| accountForScrollbars `boolean` | Default: `true` -- Whether or not to replace the scrollbar width when active. |
| isActive `boolean` | Default: `true` -- Whether or not the lock is active. |
| children `element` | Default: `null` -- This element is wrapped internally by the TouchScrollable component. |

#### TouchScrollable

Wrap an element in the `TouchScrollable` component if you need an area that supports scroll on mobile.

This is necessary because the `touchmove` event is explicitly cancelled &mdash; iOS doesn't observe `overflow: hidden;` when applied to the `<body />` element 😢

| Property                 | Description                                    |
| :----------------------- | :--------------------------------------------- |
| children `element` | `ref => element` | **Required** The element that can be scrolled. |
