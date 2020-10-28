import React, { useCallback, useRef, useMemo, useReducer, useState } from 'react';
import classNames from 'classnames';
import { Tooltip, Table, Input, Icon, Row, Col, Button } from 'antd';
import { tuple } from 'antd/es/_util/type';


// const IconPlaceOptions = tuple(
//     'up',
//     'down',
// );
declare const IconPlaceOptions: ['up', 'down',];
declare const AlignTypes: ['left', 'center'];
declare const placementTypes : [
    'top',
    'left',
    'bottom',
    'right',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
];
export type IconPlaceOption = typeof IconPlaceOptions[number];
export declare type AlignType = typeof AlignTypes[number];
export type placementType = typeof placementTypes[number];

export interface ITextOverflowProps{
    prefixCls?: string;
    dataSource: any[] | string;
    show?: boolean;
    maxShowNum?: number;
    contentAlign?: AlignType;
    IconPlace?: IconPlaceOption;
    className?: string;
    placements?: placementType;
    style?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    tipClassName?: string;
    itemStyle?: React.CSSProperties;
    IconStyle?: React.CSSProperties;
    tipStyle?: React.CSSProperties;
}

const TextOverflow : React.FC<ITextOverflowProps> = (props) =>
    {
    const [show, setShow] = useState(props.show || false);
    const prefixCls = `${props.prefixCls || 'dantd'}-text-overflow`;

    const {
        dataSource,
        maxShowNum = 5,
        IconPlace = 'down',
        contentAlign= 'left',
        placements='topLeft',
        className,
        style,
        itemStyle,
        IconStyle,
        tipStyle,
        tipClassName
    } = props;
    const tipClassNames = classNames('text-overflow-tip', tipClassName);

    const textOverflowClassName = classNames(prefixCls, className);
    
    const textOverflowStyle = {
        textAlign: contentAlign,
        ...style,
    };
    const summaryStyle ={
        textAlign: contentAlign,
        ...IconStyle,
    }
    const handleShow = ()=>{
        setShow(!show);
    };

    function IconBlock (){
        return(
        <div className={`${prefixCls}-summary`} style={summaryStyle} onClick={() => {handleShow()}}>
            <span>共{dataSource.length}条</span>
            {
                show ?
                <Icon type="up" /> :
                <Icon type="down" />
            }
        </div>
        )
    }
    return (
        <div>
             {
                (!dataSource || (dataSource && dataSource.length === 0)) ? 
                    '- -' : 
                    (Array.isArray(dataSource) ?(
                    <div className={textOverflowClassName} style={textOverflowStyle}>
                        {dataSource.length > maxShowNum && IconPlace ==='up' && (
                            <IconBlock/>
                        )}
                        {
                            (show || dataSource.length <= maxShowNum) ? (
                                dataSource.map((item, index) => {
                                    return <div key={`${prefixCls}-${index}`} className={`${prefixCls}-item`} style ={itemStyle}>{item.content}</div>
                                })
                            ) : (
                                !show && dataSource.length > maxShowNum && IconPlace ==='down' && <div className={`${prefixCls}-item`} style ={itemStyle}>{dataSource[0].content}</div>
                            )
                        }
                        {dataSource.length > maxShowNum && IconPlace ==='down' && (
                            <IconBlock/>
                        )}
                    </div>
                    )
                    :(
                        <Tooltip
                            title ={
                                <div className={tipClassName}>
                                        {dataSource}
                                </div>
                            }
                            overlayClassName='text-overflow-tip'
                            overlayStyle = {tipStyle}
                            placement={placements}
                        >
                            <div className={`${prefixCls}-tipContent` }>{dataSource}</div>
                        </Tooltip>
                    ))
                
             }
        </div>
    );
}
export default TextOverflow;