import React from 'react';

import { ReactComponent as InnerBar } from '../assets/innerBar.svg';

const TimeBar = ({ userData, time, setTime }) => {
  
    const [barHeight, setBarHeight] = React.useState(100);

    React.useEffect(() => {
        if (userData && userData.followers > 10) {
            setTime(userData.followers);
        }
    }, [userData, setTime]);

    React.useEffect(() => {
        if (userData) setBarHeight(time/userData.followers*100);
    }, [userData, time]);
    

    console.log(barHeight);

    const barStyle = {
        height: barHeight+'%'
    }

    return (
    <div className='timeContainer'> 
        <p>TIME: {time}</p>
        <InnerBar style={barStyle} className='innerBar' />
    </div>
         );
}

export default TimeBar;