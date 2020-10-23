import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import { ColorResult, Color } from 'react-color';
import ColorPickerModal from './color-picker-modal';
import './style.less';

interface ColorSelectProps {
  prefixCls?: string;
  className?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  allowClear?: boolean;
}

const white = '#fff';
const ColorSelect: React.FC<ColorSelectProps> = ({
  prefixCls,
  className,
  defaultValue = white,
  allowClear = true,
  disabled = false,
  value,
}) => {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(value || (defaultValue as Color));
  const [val, setVal] = useState(value || defaultValue);
  const changeColor = (v: ColorResult) => {
    setColor(v.hsl);
    setVal(v.hex);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleSelect = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const clearInput = (e: any) => {
    e.stopPropagation();
    setVal('');
    setColor('');
  };

  const rprefixCls = `${prefixCls || 'dantd'}-color-select`;
  return (
    <div className={`${rprefixCls} ${className || ''} `}>
      <div onClick={handleSelect} className={`${rprefixCls}-selection  ${rprefixCls}-single`}>
        <div className={`${rprefixCls}-selection_rendered`}>
          <div
            style={{ color: white, backgroundColor: val }}
            className={`${rprefixCls}-selected-value`}
          >
            {val || defaultValue}
            {!disabled && allowClear && (
              <span onClick={clearInput} className={`${rprefixCls}-selected-close`}>
                <Icon type="close-circle" />
              </span>
            )}
          </div>
        </div>
        <span className={`${rprefixCls}-icon`}>
          <Icon type="bg-colors" />
        </span>
      </div>
      {!disabled && (
        <ColorPickerModal
          title="拾色器"
          color={color}
          onSelected={closeModal}
          visible={visible}
          presetColors={[]}
          onChange={changeColor}
          onChangeComplete={changeColor}
          className={`${rprefixCls}-picker`}
        />
      )}
    </div>
  );
};

export default ColorSelect;
