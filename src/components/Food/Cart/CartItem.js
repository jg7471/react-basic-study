import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../store/cart-context';

const CartItem = ({ cart }) => {
  const { id, name, price, amount } = cart; //부모요소에서 가져오기 : 객체 디스트럭쳐링

  //스타일 분해
  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;

  //화폐단위 코리안 스타일로
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  const { addItem, removeItem } = useContext(CartContext); //CartContext에서 가져오기

  //+버튼을 누르면 무조건 amount는 하나다!
  const cartAddItemHandler = () => {
    // addItem은 앞에서 작성한 담기 기능에 사용한 함수
    //지금은 항목 추가가 아닌, 기존 항목의 수량만 하나 늘리려는 것.
    addItem({ ...cart, amount: 1 });
  };

  const cartRemoveItemHandler = () => {
    removeItem(id);
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>X{amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartRemoveItemHandler}>-</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
