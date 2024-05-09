import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  //bump 애니메이션을 제어하는 상태 변수
  const [isBump, setIsBump] = useState(false);

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);
  //배열 고차함수 reduce accu(누적 연산 값), item에서 amount 꺼냄, 초기값 0
  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0);

  useEffect(() => {
    if (items.length === 0) return;
    console.log('useEffect in CartBtn!');
    setIsBump(true);

    //다음 담기 애니메이션을 위해 bump 클래스 이름 제거
    //애니메이션 동작 시간까지 기다려 주자(300ms)
    const aniTimer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(aniTimer);
    };
  }, [items]);

  return (
    <button className={`${button} ${isBump ? bump : ''}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
