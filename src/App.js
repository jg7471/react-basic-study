import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';
import AuthContext from './components/store/auth-context';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log('App.js : App 컴포넌트의 끝!');
  return (
    <>
      <MainHeader />
      {/* HTML태그 */}
      <main>
        {/* if문 사용x */}
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login />}
      </main>
    </>
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
