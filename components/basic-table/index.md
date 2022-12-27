---
category: 组件
cols: 1
type: 数据展示
title: BasicTable
subtitle: 表格
---

## 何时使用

- 当需要前端分页，更加自由的数据处理时；
- 当需要更加**便捷**的「排序、搜索、过滤」等行为，以及「快速筛选区」时；
- 当需要一个默认的分页等表格信息配置时；
- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## API

### BasicTable

封装`ant-v3`的 [Table 组件](https://3x.ant.design/components/table-cn/) ，助力业务开发。

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| dataSource | 数据数组 | any[] | - |
| columns | 表格列的配置描述，具体项见下表 | [ColumnProps](https://github.com/ant-design/ant-design/blob/e4c72cf6f553376dbef6746bd0a74966152494fe/components/table/interface.tsx#L32)[] | - |
| queryFormColumns | 查询表单的配置描述，详见 `QueryForm` 组件的文档 | [QueryColumnProps](https://thedicode.github.io/dantd/components/query-form/#Columns)[] | - |
| loading | 加载数据时的状态 | boolean | false |
| onChange | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter, extra: { currentDataSource: [] }) | - |
| rowSelection | 表格行是否可选择，[配置项](https://3x.ant.design/components/table-cn/#rowSelection) | object | null |
| tableTitle | 表格的标题 | string | - |
| leftHeader | 表头，可以放按钮，标题信息等 | Descriptions.Item[] | - |
| customHeader | 自定义筛选头 | React.ReactNode | - |
| onReload | 点击刷新时的回调 | function() {} | - |
| showReloadBtn | 是否展示刷新 `Icon` | boolean | true |
| reloadBtnPos | 刷新按钮的位置 | `'left'` \| `'right'` | `'right'` |
| reloadBtnType | 刷新按钮的类型 | `'btn'` \| `'icon'` | `'icon'` |
| showFilter | 是否展示快速筛选区 | boolean | true |
| filterType | 快速筛选区的展示类型，`'half'` 表示只占右边一半，`'none'` 不展示，`'line'` 表示一整行 | `'line'` \| `'half'`\| `'none'` | `'half'` |
| showSearch | 是否模糊搜索框 | boolean | true |
| searchPos | 模糊搜索框的位置 | `'full'` \| `'right'` | `'full'` |
| onSearch | 组件默认会过滤数据，也可以自定义过滤函数 | function(query) {} | true |
| searchPlaceholder | 过滤输入框的占位信息 | string | `'模糊搜索表格内容(多个关键词请用空格分隔。如：key1 key2)'` |
| showBodyBg | 会给表格增加白色背景和 `padding` | boolean | false |
| showQueryOptionBtns | 是否展示 `QueryForm` 的右下角的「查询」「重置」按钮，以及「展开」「收起」 | boolean | true |
| showQueryCollapseButton | 是否展示 `QueryForm` 的「展开」「收起」 | boolean | true |
| isQuerySearchOnChange | `QueryForm`表单值变化时，是否更新Table数据 | boolean | true |
| queryFormProps | 查询表单的`props`，，详见 `QueryForm` 组件的文档 | object | - |
| queryMode | query 的展现类型 | `'default'` \| `'compact'` | `'default'` |
| hideContentBorder | 是否隐藏表格四周的边框 | boolean | false |
| antProps | `ant-v3` 的表格属性，设置了之后，会覆盖现有的属性 | [TableProps](https://github.com/ant-design/ant-design/blob/e4c72cf6f553376dbef6746bd0a74966152494fe/components/table/interface.tsx#L164) | - |
| antConfig | 使用 `Antd ConfigProvider` 进行的全局配置，需要通过这个属性传进来 | [ConfigProviderProps](https://github.com/ant-design/ant-design/blob/master/components/config-provider/index.tsx) | - |

### Columns

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。这里还提供了更加**便捷**的「排序、搜索、过滤」等属性的设置。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| commonFilter | 开启表格通用过滤 | boolean | false |
| commonSorter | 开启表格通用排序 | boolean | false |
| commonSearch | 开启表格通用搜索 | boolean | false |
| searchRender | （commonSearch 未开启时，无效）search 功能可以高亮被搜索的信息，但是会覆盖 render 方法。如果你希望保持 search 的所有功能，并自定义 render 方法，请使用 searchRender 代替 | Function(text, record, index, highlightNode) {return React.ReactNode} | - |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 时，表格布局将变成 `tableLayout="fixed"`。 | boolean | false |
| className | 列样式类名 | string | - |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number | - |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string\[] | - |
| defaultFilteredValue | 默认筛选值 | string\[] | - |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | React.ReactNode \| (props: [FilterDropdownProps](https://git.io/fjP5h)) => React.ReactNode | - |
| filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |
| filterIcon | 自定义 filter 图标。 | ReactNode\|(filtered: boolean) => ReactNode | false |
| filterMultiple | 是否多选 | boolean | true |
| filters | 表头的筛选菜单项 | object\[] | - |
| filterEnum | 表头的筛选菜单项内容枚举 | object | - |
| fixed | （IE 下无效）列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean\|string | false |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格[行/列合并](#components-table-demo-colspan-rowspan) | Function(text, record, index) {} | - |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function\|boolean | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean\|string | - |
| sortDirections | 支持的排序方式，取值为 `'ascend'` `'descend'` | Array | `['ascend', 'descend']` |
| title | 列头显示文字（函数用法 `3.10.0` 后支持） | ReactNode\|({ sortOrder, sortColumn, filters }) => ReactNode | - |
| width | 列宽度（[指定了也不生效？](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)） | string\|number | - |
| onCell | 设置单元格属性 | Function(record, rowIndex) | - |
| onFilter | 本地模式下，确定筛选的运行函数 | Function | - |
| onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |
| onHeaderCell | 设置头部单元格属性 | Function(column) | - |
