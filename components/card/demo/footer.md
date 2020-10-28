---
order: 6
title: 底部支持自定义
---

卡片底部支持传入图表组件。


```jsx
import { BasicCard } from 'antd-advanced';
import { Icon } from 'antd';
import ReactEcharts from 'echarts-for-react';

const BasicExample: React.FC = () => { 
  function getLineChart(grahData = {xdata: [], ydata: []}) {
    const option = {
      color: ['rgba(255, 255, 255, 0.5)'],
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        show: false,
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
      },
      xAxis: {
        show: false,
        data: _.get(grahData, 'xdata') || [],
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series:[{
        data: _.get(grahData, 'ydata') || [],
        type: 'line',
        areaStyle: {}
      }],
    };
    return option;
  }

  const graphData = {
    xdata: ['0','1','2','3', '4'],
    ydata: ['1','1','2','3', '4']
  };

  return (
    <BasicCard
      title="Basic Card"
      value="99.999%"
      rightHeader={
        <div>
          <Icon style={{cursor: 'pointer'}} type="edit" />
          <Icon type="delete" style={{ marginLeft: 5, cursor: 'pointer' }} />
        </div>
      }
      footerDom={
        <ReactEcharts
          option={getLineChart(graphData)}
          notMerge={true}
          lazyUpdate={true}
          style={{ width: '100%', height: 50, opacity: 0.6 }}
        />
      }
      theme="success"
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
