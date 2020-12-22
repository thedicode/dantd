---
order: 4
title: 进度条
---

传参showProgress为true，progressLabel展示label，progressPercent展示进度比例。

```jsx
import { BasicCard } from 'antd-advanced';
import { Icon } from 'antd';

const BasicExample: React.FC = () => { 
  return (
    <BasicCard
      title="Basic Card"
      value="99.999%"
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
            label: '指标3',
            value: '20%'
          }, {
            label: '指标3',
            value: '20%'
          }]
        }
      showProgress={true}
      progressLabel="已消耗21/30分钟"
      progressPercent={80}
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
