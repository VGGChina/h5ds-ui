import React, { useState } from 'react';
import './color-group.less';
import { ChromePicker } from 'react-color';
import { Popover, Divider } from 'antd';
import classNames from 'classnames';

function getColorList() {
  let colors = localStorage.getItem('H5_UI_COLORS');
  if (colors) {
    colors = colors.split(';').slice(0, 5);
  } else {
    colors = [];
  }
  return colors;
}

export default function ColorGroup({ size = 'normal', value = 'rgba(0,0,0,1)', onChange, callback, clear }) {
  const [color, setColor] = useState(value);
  const [colorList, setColorList] = useState(getColorList());

  const onVisibleChange = val => {
    if (!val) {
      if (!colorList.includes(color)) {
        colorList.unshift(color);
        let colors = colorList.slice(0, 5);
        localStorage.setItem('H5_UI_COLORS', colors.join(';'));
        setColorList(colors);
      }
      if (callback) {
        callback(color);
      }
    }
  };

  const onChangeColor = c => {
    const rgba = `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
    setColor(rgba);
    if (onChange) {
      onChange(rgba);
    }
  };

  const clickColor = c => {
    setColor(c);
    if (onChange) {
      onChange(c);
    }
  };

  return (
    <div className={classNames('ui-color-group', `ui-color-group-${size}`)}>
      <Popover
        overlayClassName="ui-color-popover"
        trigger="click"
        onVisibleChange={onVisibleChange}
        content={<ChromePicker onChange={onChangeColor} color={color} />}
      >
        <span style={{ backgroundColor: color }} className="ui-color-use"></span>
      </Popover>
      {colorList.map((d, i) => {
        return (
          <span
            onClick={() => clickColor(d)}
            key={i}
            className="ui-color-item"
            style={{ backgroundColor: d, border: `1px solid rgba(0, 0, 0, 0.1)` }}
          ></span>
        );
      })}
      {clear && (
        <>
          <Divider type="vertical" />
          <a className="ui-color-group-clear" onClick={() => clickColor('')}>清除</a>
        </>
      )}
    </div>
  );
}
