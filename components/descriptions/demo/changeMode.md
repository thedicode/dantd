---
order: 3
title: 模式切换
---

修改 `titleAlign`、`showColon`、`titleWidth` 参数，观察组件的变化。

```jsx
import { useState } from 'react';
import { Descriptions, QueryForm, EmptyLine } from 'antd-advanced';
import { Row, Col, Card, Typography, Badge, InputNumber, Switch } from 'antd';

export const data = [
  {
    title: '发生时间',
    content: '2020-09-20 19:00:00',
  },
  {
    title: '维度',
    content: '北京 西二旗 后厂村',
  },
  {
    title: '触发算子',
    content: '2020-09-20 19:00:00',
  },
  {
    title: '现场值',
    content: (
      <div style={{
        background: '#f0f2f5',
        width: 340,
        padding: 10,
        lineHeight: 1.8
      }}>
        2020-09-20 19:00:00  900  800  700 600<br/>
        2020-09-20 19:00:00  900  800<br/>
        2020-09-20 19:00:00  900  800<br/>
        2020-09-20 19:00:00  900  800<br/>
        2020-09-20 19:00:00  900  800 
      </div>
    )
  },
];

const queryColumns = [{
    type: 'select',
    title: '标题对齐(titleAlign)',
    dataIndex: 'titleAlign',
    initialValue: 'right',
    options: [
      {
        title: '右对齐',
        value: 'left',
      },
      {
        title: '左对齐',
        value: 'right',
      }
    ],
},{
    type: 'custom',
    title: '是否展示冒号(showColon)',
    dataIndex: 'showColon',
    valuePropName: 'checked',
    initialValue: true,
    component: (
      <Switch />
    )
},{
    type: 'custom',
    title: '标题的宽度(titleWidth)',
    dataIndex: 'titleWidth',
    initialValue: 80,
    component: (
      <InputNumber min={10} />
    )
}]

const Demo: React.FC = () => {
  const [query, setQuery] = useState({
    mode: "full",
    showColon: true,
    titleWidth: 80,
  });
  const handleQueryChange = queryValue => {
    setQuery(queryValue);
  };
  return (
    <div style={{
      background: '#f0f2f5',
      padding: 20,
    }}>
      <h4>选择Descriptions属性</h4>
      <QueryForm
        onChange={handleQueryChange} 
        columns={queryColumns}
        showOptionBtns={false}
      />
      <EmptyLine />
      <div 
        style={{
          background: '#fff',
          padding: 10,
          width: 400
        }}
      >
        <Descriptions 
          title="详情"
          bordered 
          dataSource={data}
          {...query}
        />
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Demo />
  </div>,
  mountNode,
);
```
