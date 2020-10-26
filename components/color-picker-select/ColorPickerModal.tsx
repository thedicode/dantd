import React from 'react';
import { Modal } from 'antd';
import { SketchPicker } from 'react-color';
// import './style/index.less';

interface IColorPickerProps {
  visible?: boolean;
  title?: string;
  className?: string;
  presetColors?: any;
  onChange?: any;
  onChangeComplete?: any;
  onSelected?: any;
  color?: any;
}

const ColorPickerModal: React.FC<IColorPickerProps> = ({
  title,
  className,
  visible = false,
  onSelected,
  ...props
}) => {
  const prefixCls = 'dantd-color-picker';
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onSelected}
      onOk={onSelected}
      footer={null}
      className={`${prefixCls} ${className ? className : ''}`}
    >
      <SketchPicker {...props} />
    </Modal>
  );
};

export default ColorPickerModal;
