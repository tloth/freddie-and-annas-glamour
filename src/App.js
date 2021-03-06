import React from 'react';
import './App.css';
import FlowerPile from './components/FlowerPile';
import Avatar from './components/Avatar';
import TimeBar from './components/TimeBar';
import SearchBar from './components/SearchBar';

function App() {
  const [userData1, setUserData1] = React.useState(null);
  const [userData2, setUserData2] = React.useState(null);

  const [time1, setTime1] = React.useState(10);
  const [time2, setTime2] = React.useState(10);

  const decrement = () => {
    setTime1(oldTime => {
      if (oldTime === 0) return 0;
      else {
        return oldTime - 1;
      }
    });
    setTime2(oldTime => {
      if (oldTime === 0) return 0;
      else {
        return oldTime - 1;
      }
    });
    window.setTimeout(decrement, 1000);

    const button = document.getElementById('startButton');
    button.classList.add('hideButton');
  };

  const [flowerCount1, setFlowerCount1] = React.useState(0);
  const [flowerCount2, setFlowerCount2] = React.useState(0);

  return (
    <div className="App">
      {!userData1 ? (
        <SearchBar setUserData={setUserData1} position="left" />
      ) : (
        <div className="container">
          <div className="flowerTime">
            <FlowerPile
              flowerCount={flowerCount1}
              setFlowerCount={setFlowerCount1}
              time={time1}
              position="left"
            />
            <TimeBar userData={userData1} time={time1} setTime={setTime1} />
          </div>
          <Avatar userData={userData1} position="left" />
        </div>
      )}

      <button onClick={decrement} id="startButton">
        FLOWER TIME
      </button>

      {!userData2 ? (
        <SearchBar setUserData={setUserData2} position="right" />
      ) : (
        <div className="container">
          <Avatar userData={userData2} position="right" />
          <div className="flowerTime">
            <FlowerPile
              flowerCount={flowerCount2}
              setFlowerCount={setFlowerCount2}
              time={time2}
              position="right"
            />
            <TimeBar userData={userData2} time={time2} setTime={setTime2} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
