import React, { useState, useEffect } from 'react';
import { Popover, Input, Icon } from 'antd';
import { SketchPicker } from 'react-color';
import { useIntl } from '../locale-provider';
import classNames from 'classnames';
import { hexToRgb } from '../utils';

export interface IColorSelectProps {
  prefixCls?: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  onChange?: (value: string) => void;
}

function ColorSelect(props: IColorSelectProps) {
  const prefixCls = `${props.prefixCls || 'dantd'}-color-select`;
  const { className, style } = props;
  // 设置变量
  const colorSelectClassName = classNames(prefixCls, className);
  const wrapperStyle = {
    ...style,
  };

  // hooks
  const { t } = useIntl();
  const [stateColor, setStateColor] = useState<string>();
  const [popVisible, setVisible] = useState<boolean>();

  // 初始化
  useEffect(() => {
    if (props.defaultValue) {
      setStateColor(props.defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStateColor(props.value);
  }, [props.value]);

  // functions
  const handleColorChange = (color) => {
    if (!props.value) {
      // 受控组件，不可以修改状态
      setStateColor(color.hex);
    }

    if (props.onChange) {
      props.onChange(color.hex);
    }
  };

  const handleInputChange = (e) => {
    // clear value
    setStateColor(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  const handleVisibleChange = (visible) => {
    if (props.disabled) {
      return;
    }
    setVisible(visible);
  };

  // render
  const renderColorPicker = () => {
    return (
      <SketchPicker disableAlpha color={stateColor} width="220px" onChange={handleColorChange} />
    );
  };

  const inputStyle = {
    cursor: 'pointer',
    ...props.inputStyle,
  };

  const inputPlaceholder = props.placeholder || t('color.placeholder');

  const rgbObject = hexToRgb(stateColor);

  let fontColor = '#fff';

  if (rgbObject && rgbObject.r > 200 && rgbObject.g > 200 && rgbObject.b > 200) {
    fontColor = '#333';
  }

  return (
    <div className={colorSelectClassName} style={wrapperStyle}>
      <Input
        allowClear={true}
        disabled={props.disabled}
        style={inputStyle}
        value={stateColor}
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
        suffix={
          <Icon
            type="up"
            style={{
              fontSize: 12,
              color: 'rgba(0,0,0,0.25)',
              marginLeft: '0.5em',
              transition: '0.3s all',
              transform: `rotate(${popVisible ? 0 : 0.5}turn)`,
            }}
          />
        }
      />
      <Popover
        visible={popVisible}
        onVisibleChange={handleVisibleChange}
        placement="bottom"
        content={renderColorPicker()}
        trigger="click"
      >
        <div
          className={`${prefixCls}-input-bg`}
          style={{
            background: stateColor || 'transparent',
            color: fontColor,
            cursor: props.disabled ? 'not-allowed' : 'pointer',
          }}
        >
          {stateColor}
        </div>
      </Popover>
    </div>
  );
}
export default ColorSelect;
