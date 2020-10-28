---
order: 1
title: 折叠 -- 传入数组数据折叠
---

展开后图标在数据上方

```jsx
import { TextOverflow, EmptyLine } from 'antd-advanced';
import { Row, Col, Card, Typography, Badge } from 'antd';

export const data = [
  {
    content: '西湖区湖底公园1号',
  },
  {
    content:
      '西湖区湖底公园2号',
  },
  {
    content:
        '西湖区湖底公园3号',
  },
  {
    content:
      '西湖区湖底公园4号',
  },
  {
    content:
      '西湖区湖底公园5号',
  },
  {
    content:
        '西湖区湖底公园6号',
  },
  {
    content:
      '西湖区湖底公园7号',
  },
];


ReactDOM.render(
<div>
  <div>
    <TextOverflow IconPlace='up'  dataSource={data}/>
  </div>
</div>
, mountNode);
```
