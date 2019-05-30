import React from 'react';
import './App.css';
import FlowerPile from './components/FlowerPile';
import Avatar from './components/Avatar';
import TimeBar from './components/TimeBar';

function App() {
  const [userData1, setUserData1] = React.useState(null);
  const [userData2, setUserData2] = React.useState(null);


  return (
    <div className="App">
      <FlowerPile user='1'/>
      <TimeBar user='1'/>
      <Avatar 
        userData1={userData1}
        setUserData1={setUserData1}
        userData2={userData2}
        setUserData2={setUserData2}
      />


      <FlowerPile user='2'/>
      <TimeBar user='2'/>
      <Avatar user='2'/>
    </div>
  );
}

export default App;
