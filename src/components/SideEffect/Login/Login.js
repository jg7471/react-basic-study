import React, { useContext, useEffect, useReducer, useState } from 'react';
import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../../UI/Input/Input';

/*리듀서 함수 선언
  이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
  컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.
  param1 - state: 변경 전의 상태값
  param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
  return: 관리할 상태값들을 반환
*/

// GPT 이메일 입력에 대한 리듀서 함수
const emailReducer = (state, action) => {
  // console.log('email reducer called!!!');
  // console.log('state: ', state);
  // console.log('action: ', action);

  //dispatch 함수가 전달한 액션 객체의 타입에 따라 변환할 상태값 반환
  //타입에 따른 기능 구현
  if (action.type === 'USER_INPUT') {
    return {
      //입력값이 포함된 새로운 상태를 반환
      value: action.val,
      isValid: action.val.includes('@'),
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      //현재 상태
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }
};

// GPT 비밀번호 입력에 대한 리듀서 함수
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
};

const Login = () => {
  const { onLogin } = useContext(AuthContext);
  //useContext(AuthContext)는 AuthContext의 현재 값을 받아오는 것을 의미하며,
  //onLogin이라는 함수를 이용하여 로그인 기능을 수행

  //email redycer 사용하기
  /*
    param1 - reducer function: 위에서 만든 리듀서 함수
    param2 - initial state: 초기 상태값
    return1 - 이메일 관련 상태변수
    return2 - dispatch함수: 상태를 변경할 수 있는 함수
  */

  // GPT 이메일과 비밀번호에 대한 상태와 상태를 변경하는 함수를 리듀서로 관리
  //state 현재 상태, dispatch 상태값 변경
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    //emailState 이메일 상태
    value: '',
    isValid: null,
  });

  const [pwState, dispatchPw] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // GPT 이메일과 비밀번호가 모두 유효한지 여부를 검증하기 위한 상태
  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  //기존의 emial 상태변수 제거함
  //상태값이 필요하다면 -> reducer에서 제공되는 상태값 활용
  //emailState에서 isValid 프로퍼티를 디스트럭처링(프로퍼티 바로 사용x)
  const { isValid: emailIsValid } = emailState;
  const { isValid: pwIsValid } = pwState;

  // GPT 이메일과 비밀번호 유효성을 검증하여 formIsValid 상태 업데이트
  //입력란(이메일, 비밀번호)을 모두 체크하여 form의 버튼 disabled를 해제하는
  //상태변수 formIsValid의 사이드 이펙트를 처리하는 영역
  useEffect(() => {
    //useEffect 첫번째 매개값 : 콜백함수
    //formIsValid의 유효성 검증을 일부러 1초 뒤에 실행하도록 setTimeout를 사용
    //1초 이내에 새로운 입력값이 들어옴 -> 상태 변경 -> 재렌더링이 진행되면서 useEffect가 또 호출됨
    const timer = setTimeout(() => {
      console.log('Login.js : useEffect called in Login.js!');
      setFormIsValid(emailIsValid && pwIsValid); //둘 중하나 값이 변할 때 마다 위 로직 실행
    }, 1000);

    //cleanup 함수 - 컴포넌트가 업데이트 되거나 없어지기 직전에 실행
    //사용자가 1초 이내에 추가 입력 -> 상태 변경 -> 위에 예약한 timer를 취소
    return () => {
      console.log('clean up!');
      clearTimeout(timer);
    };

    //의존성 배열에 상태변수를 넣어주면 그 상태변수가 바뀔 때마다 useEffect가 재실행됨.
  }, [emailIsValid, pwIsValid]);

  const emailChangeHandler = (e) => {
    //reducer의 상태 변경은 dispatch 함수를 통해서 처리
    //dispatch 함수의 매개값 객체의 key는 정해진 것이 아닌, reducer 함수에서 구분하기 위해 붙여준 이름
    //프로퍼티의 key와 valu는 자유롭게 줄 수 있음(정해진게 아님)
    dispatchEmail({
      //객체 전달(타입/밸류)
      type: 'USER_INPUT', //변경되는 타입(한글 가능)
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPw({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPw({
      type: 'INPUT_VALIDATE',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault(); //先 중지
    onLogin(emailState.value, pwState.value); //부모에게 전달할 값 //props로 전달한 값 @@@
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            //emailIsValid === false ? styles.invalid : ''
            !emailIsValid ? styles.invalid : '' // T / F
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <Input
            type="email"
            id="email"
            label="E-mail"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${!pwIsValid ? styles.invalid : ''}`}
        >
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            label="Password"
            value={pwState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.btn}
            disabled={!formIsValid} // T/F : T일 경우 누를 수 없다 @@@
            // 이메일과 비밀번호가 모두 유효하지 않으면 버튼 비활성화
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
