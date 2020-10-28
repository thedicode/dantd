import React from 'react';
import { create, act } from 'react-test-renderer';
import TextOverflow from '../text-overflow';

const data1 =  [
    {
      content: '西湖区湖底公园1号',
    },
    {
      content:
        '西湖区湖底公园2号',
    },
    {
      content:
          '西湖区湖底公园3号',
    },
    {
      content:
        '西湖区湖底公园4号',
    },
    {
      content:
        '西湖区湖底公园5号',
    },
    {
      content:
          '西湖区湖底公园6号',
    },
    {
      content:
        '西湖区湖底公园7号',
    },
  ];

test('折叠列表渲染正常', () => {
  let comp: any;

  act(() => {
    comp = create(<TextOverflow dataSource={data1} />);
  });
  expect(comp.toJSON()?.children[0].children.length).toEqual(2);
});

test('折叠列表展开状态正常', () => {
    let comp: any;
  
    act(() => {
      comp = create(<TextOverflow dataSource={data1} show={true} IconPlace="up"/>);
    });
  
    expect(comp.toJSON()?.children[0].children.length).toEqual(data1.length + 1);
  });

test('空数据渲染正常', () => {
  let comp: any;
  act(() => {
    comp = create(<TextOverflow dataSource={[]} />);
  });

  expect(comp.toJSON()?.children).toEqual(['- -']);
});
