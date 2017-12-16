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
