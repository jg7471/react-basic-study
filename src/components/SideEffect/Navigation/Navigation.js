import React, { useContext } from 'react';
import classes from './Navigation.module.css'; //변수명 stlyes 아니어도 됨
import AuthContext from '../../store/auth-context';

const Navigation = () => {
  // GPT AuthContext에서 제공되는 전역 객체를 디스트럭처링으로 분해
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      {/* Navigation 컴포넌트의 루트 요소에 CSS 클래스 적용 */}
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
