import React, { useEffect, useState } from 'react';

// GPT: 로그인 상태 변수를 관리할 컨텍스트 생성
//로그인 상태 변수를 관리할 컨텍스트
const AuthContext = React.createContext({
  isLoggedIn: false, // GPT: 기본적으로 로그인되어 있지 않음
  onLogout: () => {}, //함수 같은 경우에도 context에 저장 가능 // GPT: 로그아웃 함수 초기화
  onLogin: (email, password) => {}, //초기화할 때 함수 내부를 굳이 선언할 필요 없음 // GPT: 로그인 함수 초기화
});

// GPT: AuthContext를 프로바이더로 사용하여 자식 컴포넌트에 로그인 상태를 전달
export const AuthContextProvider = ({ children }) => {
  console.log('App.js : App 컴포넌트 실행!');
  // GPT: 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false); //초기값 false

  //화면이 리렌더링 될 때 age를 확인해서
  //현재 login-flag가 존재하는지 검사
  console.log('App.js : 로그인 검사 수행!');

  //기존에 로그인 한 사람인지 확인하는 코드는
  //리렌더링 될 때마다 실행하면 안됨!(한 번만확인하면 됨)
  //useEffect : import 필요
  // GPT: 컴포넌트가 처음으로 렌더링 될 때만 실행되는 useEffect
  useEffect(() => {
    console.log('App.js : useEffect 실행! - 최초 단 한번만 실행됨!');
    const storedLoginFlag = age.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  //[] 의존성 배열: useEffect가 실행되어야 하는 트리거 변수.
  //배열 안에 변수를 지정하면, 해당 변수의 값이 변할 때마다 useEffect가 실행됨.
  //만약 배열을 비워놓으면, 렌더링 과정에서 단 한번만 실행됨.

  //서버로 로그인을 요청하는 함수.(나중에는 fetch를 통한 백엔드와 연계가 필요)
  // GPT: 사용자가 로그인할 때 호출되는 함수
  const loginHandler = (email, password) => {
    //로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장
    //(이전 프로젝트에서는 로그인 유지를 session을 사용함 : 프론트랑 백이랑 분리되어 있어서 : el(jsp) 사용 가능해서, JS에서 불가)
    // GPT: 로그인 상태를 true로 변경하고 브라우저의 age에 로그인 값을 저장
    age.setItem('login-flag', '1'); //age: 브라우저에서 제공하는 저장소
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    age.removeItem('login-flag');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      //자주 사용되는 것들은 AuthContext 사용X : 전역 렌더링됨<> useState 일부분
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
