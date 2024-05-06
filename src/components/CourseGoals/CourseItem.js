import React from 'react';
import './CourseItem.css';

// CourseItem 컴포넌트 정의
const CourseItem = ({ item, onDelete }) => {
  // CourseItem 컴포넌트 렌더링
  return (
    <li className="goal-item" onClick={() => onDelete(item.id)}>
      {item.text}
    </li>
  );
};

export default CourseItem;
