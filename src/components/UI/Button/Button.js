import React from 'react';
//import styled from 'styled-components'; //styled 컴포넌트 사용
import styles from './Button.module.css';

const Button = ({ type, onClick, children, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
