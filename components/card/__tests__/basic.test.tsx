import React from 'react';
import { Icon } from 'antd';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import BasicCard from '../Card';

describe('Card', () => {
  it('右侧rightHeader渲染正常', () => {
    const rightHeader = <Icon type="down-circle" />;
    const { getByTestId } = render(
      <BasicCard
        title="Basic Card"
        value="99.999%"
        icon={<Icon type="code-sandbox" />}
        rightHeader={rightHeader}
      />,
    );
    const element = getByTestId('header-right');
    expect(element).toHaveClass('dantd-card-header-right');
  });

  it('检验siderData渲染正常', () => {
    const siederData = [
      {
        label: '指标1',
        value: '30%',
      },
      {
        label: '指标2',
        value: '20%',
      },
      {
        label: '指标3',
        value: '20%',
      },
      {
        label: '指标4',
        value: '20%',
      },
      {
        label: '指标5',
        value: '20%',
      },
      {
        label: '指标6',
        value: '20%',
      },
    ];
    const { getByTestId } = render(
      <BasicCard title="Basic Card" value="99.999%" siderData={siederData} />,
    );
    const element = getByTestId('sider-data');
    expect(element.children.length).toBe(6);
  });
});
