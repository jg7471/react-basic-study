import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CartModal from '../../UI/Modal/CartModal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const {
    //JS - 사용 불가
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;
  //@@@ 240508 css로 변수명 취득?

  //GPT Cart Context에서 장바구니 아이템과 총 주문 가격 가져옴
  const { items, totalPrice } = useContext(CartContext);
  console.log('items: ', items);

  return (
    <CartModal onClose={onClose}>
      {/* 주문 내역(카트 안의 음식 내역)*/}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => {
          //id, price, amount 담김, 콜백함수
          return (
            <CartItem key={cartItem.id} cart={cartItem} /> //cart라는 이름으로 cartItem넘김
          );
        })}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onClose}>
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
