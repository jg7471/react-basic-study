import React from 'react';
import './ChartBar.css';

// ChartBar 컴포넌트 정의
const ChartBar = ({ label, currentValue, totalValue }) => {
  let barFillHeight = '0%'; //% : css 때문에

  if (totalValue > 0) {
    const percentage = (currentValue / totalValue) * 100;
    barFillHeight = percentage + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <divlabel
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //자바스크립트 변수 사용하려고 {}추가
          // 막대 그래프의 높이를 동적으로 설정
        ></divlabel>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
