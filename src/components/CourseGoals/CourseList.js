import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem'; //임포트
import styled from 'styled-components';

const CourseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUl>
      {/* 목록 아이템을 CourseItem 컴포넌트로 매핑하여 렌더링 */}
      {items.map((item) => {
        return <CourseItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </CourseUl>
  );
};

export default CourseList;
