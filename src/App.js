import React from 'react';
import './App.css';
import FlowerPile from './components/FlowerPile';
import Avatar from './components/Avatar';
import TimeBar from './components/TimeBar';

function App() {
  return (
    <div className="App">
      <FlowerPile user='1'/>
      <TimeBar user='1'/>
      <Avatar user='1'/>


      <FlowerPile user='2'/>
      <TimeBar user='2'/>
      <Avatar user='2'/>
    </div>
  );
}

export default App;
