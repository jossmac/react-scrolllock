# React Scroll Lock

Prevent scroll on the `<body />` when a component is mounted.

## Install

```bash
yarn add react-scrolllock
```

## Usage

```js
import ScrollLock from 'react-scrolllock';

class Modal extends Component {
  render() {
    return (
      <div>
        ...
        <ScrollLock />
      </div>
    );
  }
}
```

## Props

| Property  | Description |
| ------------- | ------------- |
| accountForScrollbars `boolean`  | Default: `true` -- Measures the scrollbar width and replaces it with padding when mounted.  |
| touchScrollTarget `HTMLElement`  | Default: `null` -- Touch scroll is locked for iOS when mounted due to `overflow: hidden;` not being observed on the `<body/>`. This property allows you to provide an element to allow scroll on, typically within a modal. |
