import React from 'react';
import './CourseItem.css';

// CourseItem 컴포넌트 정의 //key는 안받는 이유@@, import 노필요?! 어디서 받는지
const CourseItem = ({ item, onDelete }) => {
  // CourseItem 컴포넌트 렌더링
  return (
    <li className="goal-item" onClick={() => onDelete(item.id)}>
      {item.text}
    </li>
  );
};

export default CourseItem;
