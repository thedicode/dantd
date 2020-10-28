---
category: 组件
type: 数据展示
title: TextOverflow
subtitle: 数据隐藏展示
---
数据过多或过长时展示优化
## 何时使用

数据过多，可以折叠展示或用浮动气泡框方式展示
- 折叠展示时，可以指定图标在数据上方或下方
- 气泡浮动折叠，可以指定浮动框样式和位置

## API

| 参数   | 说明       | 类型    | 默认值 |
| :----- | :--------- | :------ | :----- |
| dataSource | 数据 | any[] \| string | -     |
| maxShowNum |  数组数据折叠的最低长度 | number | 5     | 
| show |  数组数据时默认是否折叠 | boolean | false     | 
| contentAlign | 内容和折叠图标对齐方式 | `'left'` \| `'center'` |  `'leftTop'` |
| IconPlace | 折叠图标和内容上下位置 | `'up'` \| `'down'` |  `'down'` |
| placements | 气泡框位置, 可选 `'left'` `'top'` `'right'` `'topLeft'` `'topRight'` `'bottomLeft'` `'bottomRight'` `'leftTop'` `'leftBottom'` `'rightTop'` `'rightBottom'` | string | `'top'`|
| className |  折叠列表类名 | string | ''   | 
| tipClassName |  气泡框内容类名 | string | ''    |
| IconStyle |  折叠时图标行样式 | object | {}    |
| itemStyle |  折叠展开时行内容样式 | object | {}    |


