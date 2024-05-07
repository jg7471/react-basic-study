import React from 'react';
import ReactDOM from 'react-dom';

const Potal = ({ children: renderComponent, destId }) => {
  //전송할 요소, id
  return ReactDOM.createPortal(
    renderComponent,
    document.getElementById(destId),
  );
};

export default Potal;
