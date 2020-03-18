import React from 'react';
import './App.css';
import { Routes } from "./Routes"

interface Props {
  alt: string;
}

function App() {
  return (

      <div className="App">
        <Routes/>
      </div>

  );
}

export default App;
