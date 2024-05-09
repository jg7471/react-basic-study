import React from 'react';
import styles from './CartModal.module.scss';
import Potal from '../Potal/Potal';

const BackDrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children, onClose }) => {
  //@@ children 어디서? onClose : CartModal에서
  return (
    <>
      <Potal destId="backdrop-root">
        <BackDrop onClose={onClose} />
      </Potal>
      <Potal destId="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Potal>
    </>
  );
};

export default CartModal;
