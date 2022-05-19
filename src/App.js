import logo from './logo.svg';
import React from 'react';

import GroupData from './views/group';
import './App.css';

function App() {
  let name = "dunstan";
  return (
    <div className="App"> 
       <GroupData  pname={name}/>
    </div>
  );
}

export default App;
