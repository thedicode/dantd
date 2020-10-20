import React from 'react';
import _ from 'lodash';

interface ISiderData {
  label: string,
  value: string | number,
}

interface IBasicCard {
  prefixCls?: string,
  title: string,
  value: number | string,
  rightHeader?: React.ReactNode,
  style?: React.CSSProperties,
  icon?: React.ReactNode,
  subTitle?: string,
  siderData?: ISiderData[],
  showProgress?: boolean,
  progressLabel?: string,
  progressPercent?: number,
  footerDom?: React.ReactNode,
  theme?: 'default' | 'gray' | 'success' | 'error' | 'warning' | 'info'
}


function Card(props: IBasicCard) {
  const prefixCls = `${props.prefixCls || 'dantd'}-card`;
  const {
    style = {},
    title,
    rightHeader = <div />,
    icon,
    siderData = [],
    value,
    subTitle,
    showProgress = false,
    progressLabel,
    progressPercent,
    footerDom,
    theme = 'default'
  } = props;
  return (
    <div className={prefixCls} style={style}>
      <div className={`card-${theme}`}>
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-header-left`}>{title}</div>
          <div className={`${prefixCls}-header-right`} data-testid="header-right">{rightHeader}</div>
        </div>
        <div className={`${prefixCls}-body`}>
          <div className={`${prefixCls}-body-left`}>
            {icon &&
              <div className={`${prefixCls}-body-left-icon`}>{icon}</div>
            }
            <div className={`${prefixCls}-body-left-value`}>
              <div className={`${prefixCls}-body-left-value-data`}>{value}</div>
              {subTitle && <div className={`${prefixCls}-body-left-value-subtitle`}>{subTitle}</div>}
            </div>
          </div>

          {!_.isEmpty(siderData) &&
            <div className={`${prefixCls}-body-right`} data-testid="sider-data">
              {_.map(siderData, (item, i) => <div key={i}>
                <span className={`${prefixCls}-body-right-label`}>{item.label}</span>
                <span className={`${prefixCls}-body-right-value`}>{item.value}</span>
              </div>)}
            </div>
          }
        </div>
        <div className={`${prefixCls}-bottom`}>
          {showProgress &&
            <div className="battery">
              <div className="label">{progressLabel}</div>
              <div
                className="bg-percent"
                style={{
                  width: `${progressPercent}%`,
                }}
              />
            </div>
          }
          {footerDom && <div>{footerDom}</div>}
        </div>
      </div>
    </div>
  )
}

export default Card;
