import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, currentValue, totalValue }) => {
  let barFillHeight = '0%'; //% : css 때문에

  if (totalValue > 0) {
    const percentage = (currentValue / totalValue) * 100;
    barFillHeight = percentage + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //자바스크립트 변수 사용하려고 {}추가
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
