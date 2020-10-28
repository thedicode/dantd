---
order: 2
title: 基本 -- tip
---

气泡隐藏

```jsx
import { TextOverflow, EmptyLine } from 'antd-advanced';
import { Row, Col, Card, Typography, Badge } from 'antd';

export const data = "我们学会了把世上一切事物分成好的和坏的以后，对世界的了解还是非常非常可怜的。我们还要继续学习一切是如何发生、如何变化的。这些知识会冲击我们过去形成的是非标准，这时我们就面临一个重大抉择，是接受事实，还是坚持旧有的价值观念？事实上有很多这样的人：他们“明辨是非”的能力却成了接触世界与了解世界的障碍，结果是终身停留在只会“明辨是非”的水平上。——王小波《一只特立独行的猪》";


ReactDOM.render(
<div>
  <div>
    <TextOverflow  dataSource={data} tipClassName='tip-params'/>
  </div>
</div>
, mountNode);
```
