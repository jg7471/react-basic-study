import React from 'react';
// import './CourseList.css';
import CourseItem from './CourseItem';
import styled from 'styled-components';

const CourseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
}
`;`

const CourseList = ({ items, onDelete }) => {
  return (
    <ul className="goal-list">
      {items.map((item) => {
        return <CourseItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </ul>
  );
};

//내가 작성
// const onDelete = (deletebtn) => {
//   console.log(`${CourseItem}가 삭제되었습니다.`);
// }

// return (
// <button type="button" id="deletebtn" onClick={deleteHandler}>delete</button>
// <CourseList onCreate={onDelete} ></CourseList>

//   );

export default CourseList;
