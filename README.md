# React Scroll Lock

Prevent scroll on the `<body />` in your React application.

## Install

```sh
yarn add react-scrolllock
```

## Usage

### Hook (recommended)

You must pass the `ref` to the element you wish to be "scrollable".

```js
import { useScrollLock } from 'react-scrolllock';

export const Modal = () => {
  const ref = useScrollLock({ isActive: true });
  return <div ref={ref}>...</div>;
};
```

### Component

Wrap the element you wish to be "scrollable" with `ScrollLock`. Given a React
element, the ref will be cloned on to the element. For more control use the
render-prop pattern.

```js
import { ScrollLock } from 'react-scrolllock';

export const Modal = () => (
  <ScrollLock isActive>
    {scrollableRef => (
      <div ref={scrollableRef}>
        ...
      </div>
    )}
  </ScrollLock>>
)
```

## Props

### Hook

| Property                       | Description                                                                   |
| :----------------------------- | :---------------------------------------------------------------------------- |
| accountForScrollbars `boolean` | Default: `true` -- Whether or not to replace the scrollbar width when active. |
| isActive `boolean`             | Default: `undefined` -- Whether or not the lock is active.                    |

### Component

As above plus `children`:

| Property                            | Description                                    |
| :---------------------------------- | :--------------------------------------------- |
| children `element | ref => element` | **Required** The element that can be scrolled. |
