import './App.css';
import React, { useState } from 'react';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';
import Cart from './components/Food/Cart/Cart';
import CartProvider from './components/store/CartProvider';

const App = () => {
  //장바구니 모달의 공개 여부 상태 변수
  const [cartIsShown, setCartIsShown] = useState(false);

  //모달을 열어주는 핸들러
  const showCartHandler = () => setCartIsShown(true);

  //모달을 닫아주는 핸들러
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <div id="main">
        <Meals />
      </div>
    </CartProvider>
  );
};

export default App;

///////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import CourseInput from './components/CourseGoals/CourseInput';
// import CourseList from './components/CourseGoals/CourseList';

// // App 컴포넌트 정의
// const App = () => {
//   // courseGoals 상태 변수와// 해당 상태를 업데이트하는 함수 선언
//   const [courseGoals, setCourseGoals] = useState([]);

//   // 목표 추가 핸들러 함수
//   const addGoalHandler = (enteredText) => {
//     setCourseGoals((prevGoals) => {
//       const updatedGoals = [
//         ...prevGoals,
//         { id: Math.random().toString(), text: enteredText },
//       ];
//       return updatedGoals;
//     });
//   };

//   // 목표 삭제 핸들러 함수
//   const deleteGoalHandler = (goalId) => {
//     setCourseGoals((prevGoals) => {
//       // 목표 ID를 기준으로 삭제된 목표를 제외한 새로운 목표 배열 생성하여 업데이트
//       const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
//       return updatedGoals;
//     });
//   };

//   // App 컴포넌트 렌더링
//   return (
//     <div>
//       {/* CourseInput 컴포넌트를 렌더링하고, 목표 추가 핸들러 함수를 전달 */}
//       <CourseInput onAdd={addGoalHandler} />
//       {/* CourseList 컴포넌트를 렌더링하고, 목표 목록과 목표 삭제 핸들러 함수를 전달 */}
//       <CourseList items={courseGoals} onDelete={deleteGoalHandler} />
//     </div>
//   );
// };

// export default App;

///////////////////////////////////////////////////////
//
// import './App.css';
// import React from 'react';
// import Chart from './components/Chart/Chart';
// import ChartBar from './components/Chart/ChartBar';

// const App = () => {
//   // dataPoints를 설정하여 Chart 컴포넌트에 전달
//   const dataPoints = [
//     { label: 'January', value: 10 },
//     { label: 'February', value: 20 },
//     { label: 'March', value: 15 },
//     // 나머지 데이터 포인트 추가
//   ];

//   return (
//     <div>
//       {/* Chart 컴포넌트에 dataPoints prop을 전달하여 호출 */}
//       <Chart dataPoints={dataPoints} />
//     </div>
//   );
// };

// export default App;
