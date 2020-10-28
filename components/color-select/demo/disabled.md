---
order: 2
title: 禁用模式
---

使用 disabled 禁用组件

```jsx
import { ColorSelect, EmptyLine } from 'antd-advanced';


ReactDOM.render(
  <div>
    <ColorSelect disabled />
    <EmptyLine />
    <ColorSelect value="#4a90e2" disabled />
  </div>,
  mountNode,
);
```
