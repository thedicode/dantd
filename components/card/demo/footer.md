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
      color: ['#fff'],
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        show: false,
        left: -80,
        right: -80,
        top: 0,
        bottom:0,
      },
      xAxis: {
        show: false,
        data: _.get(grahData, 'xdata') || [],
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
    xdata: ['1','2','3', '4'],
    ydata: ['1','2','3', '4']
  };

  return (
    <BasicCard
      title="Basic Card"
      value="99.999%"
      rightHeader={
        <div>
          <Icon type="edit" />
          <Icon type="delete" style={{ marginLeft: 5 }} />
        </div>
      }
      footerDom={
        <div style={{margin: '10px -20px -20px -20px' }}>
          <ReactEcharts
            option={getLineChart(graphData)}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: '100%', height: 50, opacity: 0.6 }}
          />
        </div>
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
