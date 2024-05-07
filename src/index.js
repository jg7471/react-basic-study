import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //App.js를 Context의 Consumer로 사용하기 위해
  //따로 분할해 놓은 AuthContextProvider의 children으로 전달 @@@
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
);
