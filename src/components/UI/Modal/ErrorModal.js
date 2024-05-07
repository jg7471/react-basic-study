import React from 'react';
import styles from './ErrorModal.module.css';
import Card from '../Card';
import Button from '../Button/Button';

//portal 기능을 사용하기 위한 import
import ReactDOM from 'react-dom';
import Potal from '../Potal/Potal';

// Backdrop 컴포넌트 정의
const BackDrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

// ModalOverlay 컴포넌트 정의
const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

//Modal을 사용하는 쪽에서 모달 제목과 메시지가 props로 전달될 것이다.
//onConfirm -> AddUsers 쪽에서 상태관리하고 있는 모달 노출 여부를 제어하는 함수.
// ErrorModal 컴포넌트 정의
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      {/* 포탈 컴포넌트 분할 -> Potal.js */}
      <Potal destId="backdrop-root">
        <BackDrop onConfirm={onConfirm} />
      </Potal>

      <Potal destId={'overlay-root'}>
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
      </Potal>

      {/* 기존 포탈 2번으로 만듦
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}

      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root'),
      )} */}
    </>
  );
};

export default ErrorModal;
