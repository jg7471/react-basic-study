import React from 'react';
//장바구니에 담기거나 제외되는 항목들을 전역 상태 관리하는 컨텍스트
//컨텍스트에 들어가는 초기 객체는 뭘 담을 것인지에 대한 정의 : 내용은 Provider에서

const CartContext = React.createContext({
  items: [], //카트에 담긴 상품들
  totalPrice: 0, //주문 총액
  addItem: (item) => {}, //함수형태 : 담기버튼시 호출 (여기선 정의x)
  removeItem: (id) => {}, //취소함수
});

export default CartContext;
