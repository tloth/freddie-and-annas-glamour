import React from 'react';

import { ReactComponent as innerBar } from '../assets/innerBar.svg';

const TimeBar = ({userData}) => {
  
    const [time, setTime] = React.useState(10);
    const [barHeight, SetBarHeight] = React.useState(100);

    React.useEffect(() => {
        if (userData && userData.followers > 10) {
            setTime(userData.followers);
            SetBarHeight(time/userData.followers);
        }
    }, [userData]);
    
    const decrement = () => {
        setTime(oldTime => {
           if (oldTime === 0) return 0;
           else {
                window.setTimeout(decrement, 1000);
                return oldTime - 1;
           }
        })
    };

    const barStyle = {
        height: barHeight +'%'
    }

    return (
    <div> 
        <button onClick={decrement}>CLICK ME</button> 
        <p>Time: {time}</p>
        <img src=''></img>
    </div>
         );
}

export default TimeBar;