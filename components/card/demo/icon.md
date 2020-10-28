---
order: 2
title: 图标或图片
---

传参icon支持antd icon格式和自定义图片dom。


```jsx
import { BasicCard } from 'antd-advanced';
import { Icon } from 'antd';

const BasicExample: React.FC = () => { 
  return (
    <div>
      <BasicCard
        title="Basic Card"
        value="99.999%"
        icon={<Icon style={{cursor: 'pointer'}} type="code-sandbox" />}
        style={{marginTop: 20 }}
      />
    </div>
  );
}

ReactDOM.render(
  <div>
    <BasicExample />
  </div>,
  mountNode,
);
```
