---
order: 0
title: 基本卡片
---

卡片白底样式，基本属性包括标题和数值。


```jsx
import { BasicCard } from 'antd-advanced';

const BasicExample: React.FC = () => { 
  return (
    <div>
      <BasicCard
        value="99.999%"
      />
      <BasicCard
        title="Basic Card"
        value="99.999%"
        style={{marginTop: 20 }}
      />
       <BasicCard
        title="Basic Card"
        value="99.999%"
        subTitle="我是副标题"
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
