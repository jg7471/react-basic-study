import logo from './logo.svg';
import './App.css';
import React from 'react';
import NoName from './NoName';

function App() {
      //HTML과 다르다 = 구조만 유사 : 렌더링 과정에서 HTML으로 변환
    //className 사용
    // <>감싸주기
    // <input/><br/> 무조건 닫아주기
    //f1-terminal-npm start
  
    const $h2 = <h2>반가워~!~!</h2>;
  
  return (
    
    <> 
    <NoName />

      <div className='App'>
        <h1>메롱메롱~</h1>
        {$h2}
      </div>

      <div className='noname'>
        <input type='text'/>
        <p>오늘은 5월 1일 행복한 수요일 입니다.<br/>
        오후 3시 30분 입니다.<br/>
        I LOVE REACT
        </p>
      </div>
    </>

  );
}

export default App;