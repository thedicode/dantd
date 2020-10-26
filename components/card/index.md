---
category: 组件
cols: 2
type: 数据展示
title: Card
subtitle: 卡片
---

## 何时使用

最基础的卡片容器，支持文字，数值，icon和进度条的展示，支持定制主题色。

## API

| 参数 | 说明 | 类型 | 默认值 
| --- | --- | --- | --- | --- |
| title | 卡片标题 | string\|ReactNode | - |  
| value | 数据 | number\|string | -  |  
| rightHeader | 右上角操作栏 | ReactNode | - |  
| theme | 主题色，可选`default` \| `gray` \|`warning` \|  `info` \| `error` \| `success`|  string | default | - |
| style |样式 | React.CSSProperties | - |  
| icon | 图标或图片，支持传入antd的icon或img | ReactNode | - |  
| subTitle | 数字标题 | string | - |  
| siderData | 指标数据 | {label: string, value: string\|number}[] | [] |  
| showProgress | 是否展示进度条 | boolean | false | 
| progressLabel | 指标标识文案 | string | - | 
| progressPercent | 进度比例(0-100) | number | - | 
| footerDom | 自定义底部 | ReactNode | - | 
| prefixCls | 样式前缀 | string | - |
