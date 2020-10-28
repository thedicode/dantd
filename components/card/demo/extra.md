---
order: 1
title: 带操作按钮
---

自定义右上角操作栏。


```jsx
import { BasicCard } from 'antd-advanced';
import { Icon } from 'antd';

const BasicExample: React.FC = () => { 
  return (
      <BasicCard
        title="Basic Card"
        value="99.999%"
        icon={<Icon type="code-sandbox" />}
        rightHeader={
          <div>
            <Icon style={{cursor: 'pointer'}} type="edit" />
            <Icon type="delete" style={{ marginLeft: 5, cursor: 'pointer' }} />
          </div>
        }
      />
  );
}

ReactDOM.render(
  <div>
    <BasicExample />
  </div>,
  mountNode,
);
```
