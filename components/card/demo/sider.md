---
order: 3
title: 侧边指标数据
---

传参siderData，支持侧边指标数据展示。


```jsx
import { BasicCard } from 'antd-advanced';
import { Icon } from 'antd';

const BasicExample: React.FC = () => { 
  return (
    <BasicCard
      title="Basic Card"
      value="99.999%"
      icon={<Icon type="code-sandbox" />}
      siderData={
          [{
            label: '指标1',
            value: '30%'
          }, {
            label: '指标2',
            value: '20%'
          }, {
            label: '指标2',
            value: '20%'
          }, {
            label: '指标2',
            value: '20%'
          }, {
            label: '指标2',
            value: '20%'
          }, {
            label: '指标2',
            value: '20%'
          }]
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
