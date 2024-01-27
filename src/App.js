import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Content2 from './components/Content2';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Content2/>
    </div>
  );
}

export default App;
