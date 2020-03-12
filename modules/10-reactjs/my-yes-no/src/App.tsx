import React from 'react';
import './App.css';
import { LoadYesno } from './features/load-yesno';
import { OnlineTodoList } from './features/onlineTodoList';

function App() {
  return (
    <div className="App">
    <LoadYesno></LoadYesno>
    <OnlineTodoList></OnlineTodoList>
    </div>
  );
}

export default App;
