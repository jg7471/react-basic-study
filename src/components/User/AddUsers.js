import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = () => {
  //에러 상태 관리
  const [error, setError] = useState(null);

  //useRef로 기억된 input 요소(dom) 가져오기
  const nameInput = useRef();
  const ageInput = useRef();

  // 사용자 정보 제출 핸들러
  const userSubmitHandler = (e) => {
    console.log(nameInput.current);

    const username = nameInput.current.value;
    const age = ageInput.current.value;

    e.preventDefault();
    // 입력값이 비어있는 경우
    if (username.trim() === '' || age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하면 안됩니다.!',
      });
      return;
    }
    // 나이가 유효하지 않은 경우
    if (+age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1이상의 숫자로 작성해 주세요',
      });
      return;
    }

    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    //module.css //styles.input 랜덤 이름 : class 이름 충돌 방지

    //module.css 사용 : 충돌방지
    <>
      {/* 이방식 리액트에서 자주 씀 */}
      {/* 에러가 존재하는 경우 ErrorModal을 렌더링 */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      {/* CSS 모듈 클래스명 적용 */}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor="username">이름</label>
          <input id="username" type="text" ref={nameInput} />
          <label htmlFor="age">나이</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
