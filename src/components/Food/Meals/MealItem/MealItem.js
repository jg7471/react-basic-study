import React, { useContext } from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
//상하구조 파악법@@@

const MealItem = ({ id, price, description, name }) => {
  //context에서 필요한 데이터 or 함수를 소비하기 위해 꺼내기
  //addItem -> 장바구니에 상품에 추가하는 함수를 얻어옴
  //상품에 대한 정보가 다 여기에 있어서 : form쪽에서 수량 정보만 가져오기
  const { addItem } = useContext(CartContext);

  //MealItemForm에게 넘길 함수 -> 수량 받아와야 해여~!
  const addToCartHandler = (amount) => {
    const item = {
      id,
      name,
      price: +price,
      amount: +amount,
    };
    addItem(item);
  };

  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
        {/* 자식쪽에서 @@@ */}
      </div>
    </li>
  );
};

export default MealItem;
