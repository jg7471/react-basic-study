import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import './CourseInput.css';

// CourseInput 컴포넌트 정의
const CourseInput = ({ onAdd }) => {
  // 입력된 텍스트와 입력값 유효성 상태를 관리하는 상태 변수 선언\
  // 입력값 검증 상태변수
  const [enteredText, setEnteredText] = useState('');
  const [isValid, setIsValid] = useState(true);

  // 입력값 변경 핸들러
  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  // 폼 제출 핸들러
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    // 부모 컴포넌트로 입력된 텍스트를 전달하고 입력값 초기화
    onAdd(enteredText); //onAdd는 부모 컴포넌트에서 CourseInput 컴포넌트로 전달된 함수
    setEnteredText('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        <input type="text" onChange={textChangeHandler} value={enteredText} />
        {/* 입력 값이 변경될 때마다 textChangeHandler 함수가 호출되며, 입력 필드의 값은 enteredText 변수와 바인딩됩니다 */}
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
