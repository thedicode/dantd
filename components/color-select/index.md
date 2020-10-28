---
category: 组件
type: 数据录入
title: ColorSelect
subtitle: 颜色选择器
---

## 何时使用

需要使用 `hex` 模式，选择颜色时；可结合 form 表单使用。

### TODO

支持 `RGB` 模式等更多扩展

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 类名 | string | - | |
| defaultValue | 初始默认颜色，非受控模式下使用 | string |  |  |
| value | 颜色值 | string |  |  |
| disabled | 是否禁用 | boolean | false |  |
| placeholder | 输入框占位 | string | 请选择颜色 |  |
| onChange | 变化时回调函数 | Function(color: string) |  |  |
| style | 组件外层的 style 属性 | object | - |  |
| inputStyle | 输入框的 style 属性 | object | - |  |
