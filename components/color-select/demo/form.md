---
order: 3
title: 结合Form.Item使用
---

结合 `Form.Item` 包裹组件

```jsx
import { ColorSelect } from 'antd-advanced';
import { Form } from 'antd';

ReactDOM.render(
  <div>
    <Form.Item>
      <ColorSelect />
    </Form.Item>
  </div>,
  mountNode,
);
```
