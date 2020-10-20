import React from 'react';
import classNames from 'classnames';

export interface IDescriptionItem {
  title?: string | number | React.ReactNode;
  content?: string | number | React.ReactNode;
  mainTitle?: string | number | React.ReactNode;
}

declare const AlignTypes: ['left', 'right'];
export declare type AlignType = typeof AlignTypes[number];

export interface IDescriptionsProps {
  prefixCls?: string;
  className?: string;
  bordered?: boolean;
  style?: React.CSSProperties;
  title?: string | React.ReactNode;
  titleStyle?: React.CSSProperties;
  showColon?: boolean;
  titleWidth?: number | string;
  titleAlign?: AlignType;
  itemTitleStyle?: React.CSSProperties;
  itemContentStyle?: React.CSSProperties;
  dataSource: IDescriptionItem[];
}

const Descriptions: React.FC<IDescriptionsProps> = (props) => {
  const prefixCls = `${props.prefixCls || 'dantd'}-desc`;
  const {
    itemTitleStyle = {},
    itemContentStyle = {},
    className,
    bordered = false,
    style,
    titleAlign = 'right',
    showColon = false,
    titleStyle,
  } = props;
  const descClassName = classNames(prefixCls, bordered && `${prefixCls}-bordered`, className);
  const wrapperStyle = {
    ...style,
  };
  const defaultTitleWidth = 80;
  const mainTitleStyle = {
    width: props.titleWidth ? props.titleWidth : defaultTitleWidth,
    textAlign: titleAlign,
    ...titleStyle,
  };

  // const itemTitleClassName = classNames(
  //   `${prefixCls}-item-title`,
  //   showColon && `${prefixCls}-item-title-colon`,
  // );

  const itemTitleClassName = `${prefixCls}-item-title`;

  const localItemTitleStyle = {
    width: props.titleWidth ? props.titleWidth : defaultTitleWidth,
    textAlign: titleAlign,
    ...itemTitleStyle,
  };

  const dataSource = props.dataSource ? props.dataSource : [];

  return (
    <div className={descClassName} style={wrapperStyle}>
      {dataSource.length === 0 && '- -'}
      {props.title && (
        <h3 style={mainTitleStyle} className={`${prefixCls}-title`}>
          {props.title}
        </h3>
      )}
      {dataSource.map((dataItem, dataItemIdx) => {
        return dataItem.mainTitle ? (
          <div key={`${prefixCls}-${dataItemIdx}`} className={`${prefixCls}-item`}>
            <div style={localItemTitleStyle} className={`${prefixCls}-item-main-title`}>
              {dataItem.mainTitle}
            </div>
          </div>
        ) : (
          <div key={`${prefixCls}-${dataItemIdx}`} className={`${prefixCls}-item`}>
            <div style={localItemTitleStyle} className={itemTitleClassName}>
              {dataItem.title ? dataItem.title : '- -'}
              {showColon && ':'}
            </div>
            <div style={itemContentStyle} className={`${prefixCls}-item-content`}>
              {dataItem.content ? dataItem.content : '- -'}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
