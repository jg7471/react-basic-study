import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

// Chart 컴포넌트 정의
const Chart = ({ dataPoints }) => {
  //1년치 지출 총액이 필요하다! (그래야 비율 기준을 설정할 수 있으니까)
  // dataPoints 배열에서 value 값만 추출하여 새로운 배열 생성
  const dataPointsValue = dataPoints.map((dp) => dp.value); //value만 들어있는 배열로 추출.
  //(dp)는 map 함수의 콜백 함수의 매개변수

  //1년치 총액
  //a: 리턴결과에 대한 누적값, b: 배열에서 하나씩 꺼낸 값 : a + b, 0(초기값) 요거 봐라
  const totalValue = dataPointsValue.reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => {
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            totalValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
