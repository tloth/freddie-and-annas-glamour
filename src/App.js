import React from 'react';
import './App.css';
import FlowerPile from './components/FlowerPile';
import Avatar from './components/Avatar';
import TimeBar from './components/TimeBar';

function App() {
  const [userData1, setUserData1] = React.useState(null);
  const [userData2, setUserData2] = React.useState(null);

  const [time1, setTime1] = React.useState(10);
  const [time2, setTime2] = React.useState(10);

  const [flowerCount1, setFlowerCount1] = React.useState(0);
  const [flowerCount2, setFlowerCount2] = React.useState(0);

  return (
    <div className="App">
      <FlowerPile
        flowerCount={flowerCount1}
        setFlowerCount={setFlowerCount1}
        time={time1}
        position='left'
      />
      <TimeBar
        userData={userData1}
        time={time1}
        setTime={setTime1}
        />
      <Avatar 
        userData={userData1}
        setUserData={setUserData1}
        username='seabasshoang'
        position='left'
      />
      
      <Avatar 
        userData={userData2}
        setUserData={setUserData2}
        username='starsuit'
        position='right'
      />
      <TimeBar
        userData={userData2}
        time={time2}
        setTime={setTime2}
      />
      <FlowerPile
        flowerCount={flowerCount2}
        setFlowerCount={setFlowerCount2}
        time={time2}
        position='right'
      />
    </div>
  );
}

export default App;
