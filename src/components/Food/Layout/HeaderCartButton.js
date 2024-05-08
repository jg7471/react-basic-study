import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;

  const { items } = useContext(CartContext);
  //배열 고차함수 reduce accu(누적 연산 값), item에서 amount 꺼냄, 초기값 0
  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0);

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
