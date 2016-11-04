# React Scroll Lock

Prevent scroll on the `<body />` when component is mounted.

### Usage

```bash
npm install --save react-scrolllock
```

```js
import ScrollLock from 'react-scrolllock';

class Modal extends Component {
  render () {
    return (
      <div>
        ...
        <ScrollLock />
      </div>
    )
  }
}
```
