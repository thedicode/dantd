import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import { ColorResult, Color } from 'react-color';
import ColorPickerModal from './ColorPickerModal';
import './style/index.less';

interface ColorSelectProps {
  prefixCls?: string;
  defaultValue?: string;
  value?: string;
  // 向外
  className?: string;
  onChange?: (v: string) => void;
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
  onChange,
  value,
}) => {
  let initial = false;
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(value || (defaultValue as Color));
  const [val, setVal] = useState(value || defaultValue);
  const changeColor = (v: ColorResult) => {
    setColor(v.hsl);
    setVal(v.hex);
    onChange && onChange(v.hex);
  };

  useEffect(() => {
    // 滤掉初始值
    if (!(!initial && value === undefined)) {
      setVal(value);
      initial = true;
    }
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
    onChange && onChange('');
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
            {val}
            {!disabled && allowClear && (
              <span onClick={clearInput} className={`${rprefixCls}-selected-close`}>
                <Icon type="close-circle" />
              </span>
            )}
          </div>
        </div>
        <span className={`${rprefixCls}-icon`}>
          <Icon type="down" />
        </span>
      </div>
      {/* 非可插拔, 考虑换成children吧 */}
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
