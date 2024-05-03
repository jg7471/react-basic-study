import './App.css';
import React, { useState } from 'react';
import AddUsers from './components/User/AddUsers';
import UserList from './components/User/UserList';

const App = () => {
  return (
    <div>
      <AddUsers />
      <UserList />
    </div>
  );
};

export default App;
