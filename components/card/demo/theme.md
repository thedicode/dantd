---
order: 5
title: 主题色
---

theme支持default，success，error，warning，info，gray等6种主题。

```jsx
import { BasicCard } from 'antd-advanced';
import { Icon } from 'antd';

const BasicExample: React.FC = () => { 
  return (
    <div>
     <BasicCard
        title="Default Theme"
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
              label: '指标2',
              value: '20%'
            }, {
              label: '指标2',
              value: '20%'
            }]
          }
        subTitle="我是副标题"
        rightHeader={
          <div>
            <Icon type="edit" />
            <Icon type="delete" style={{ marginLeft: 5 }} />
          </div>
        }
        showProgress={true}
        progressLabel="已消耗2/30分钟"
        progressPercent={80}
        theme="default"
      />
       <BasicCard
        title="Gray Theme"
        value="99.999%"
        subTitle="我是副标题"
        rightHeader={
          <div>
            <Icon type="edit" />
            <Icon type="delete" style={{ marginLeft: 5 }} />
          </div>
        }
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
              label: '指标2',
              value: '20%'
            }, {
              label: '指标2',
              value: '20%'
            }]
          }
        style={{marginTop: 20 }}
        showProgress={true}
        progressLabel="已消耗2/30分钟"
        progressPercent={80}
        theme="gray"
      />
      <BasicCard
        title="Success Theme"
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
              label: '指标2',
              value: '20%'
            }, {
              label: '指标2',
              value: '20%'
            }]
          }
        subTitle="我是副标题"
        rightHeader={
          <div>
            <Icon type="edit" />
            <Icon type="delete" style={{ marginLeft: 5 }} />
          </div>
        }
        showProgress={true}
        progressLabel="已消耗2/30分钟"
        progressPercent={80}
        theme="success"
        style={{marginTop: 20 }}
      />
       <BasicCard
        title="Error Theme"
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
              label: '指标2',
              value: '20%'
            }, {
              label: '指标2',
              value: '20%'
            }]
          }
        subTitle="我是副标题"
        rightHeader={
          <div>
            <Icon type="edit" />
            <Icon type="delete" style={{ marginLeft: 5 }} />
          </div>
        }
        style={{marginTop: 20 }}
        showProgress={true}
        progressLabel="已消耗2/30分钟"
        progressPercent={80}
        theme="error"
      />
       <BasicCard
        title="Warning Theme"
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
              label: '指标2',
              value: '20%'
            }, {
              label: '指标2',
              value: '20%'
            }]
          }
        subTitle="我是副标题"
        rightHeader={
          <div>
            <Icon type="edit" />
            <Icon type="delete" style={{ marginLeft: 5 }} />
          </div>
        }
        style={{marginTop: 20 }}
        showProgress={true}
        progressLabel="已消耗2/30分钟"
        progressPercent={80}
        theme="warning"
      />
       <BasicCard
        title="Info Theme"
        value="99.999%"
        subTitle="我是副标题"
          rightHeader={
            <div>
              <Icon type="edit" />
              <Icon type="delete" style={{ marginLeft: 5 }} />
            </div>
          }
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
              label: '指标2',
              value: '20%'
            }, {
              label: '指标2',
              value: '20%'
            }]
          }
        style={{marginTop: 20 }}
        showProgress={true}
        progressLabel="已消耗2/30分钟"
        progressPercent={80}
        theme="info"
      />
    </div>
  );
}

ReactDOM.render(
  <div>
    <BasicExample />
  </div>,
  mountNode,
);
```
