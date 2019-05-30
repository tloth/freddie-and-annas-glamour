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
      <TimeBar userData={userData1}/>
      <Avatar 
        userData={userData1}
        setUserData={setUserData1}
        username='jokosanyang'
        position='left'
      />
      
      <Avatar 
        userData={userData2}
        setUserData={setUserData2}
        username='charlielafosse'
        position='right'
      />
      <TimeBar userData={userData2}/>
      <FlowerPile user='2'/>
    </div>
  );
}

export default App;
