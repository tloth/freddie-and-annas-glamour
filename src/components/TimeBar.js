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
        if (userData) setBarHeight(time / userData.followers * 100);
    }, [userData, time]);

    const decrement = () => {
        setTime(oldTime => {
            if (oldTime === 0) return 0;
            else {
                window.setTimeout(decrement, 1000);
                return oldTime - 1;
            }
        })
    };

    console.log(barHeight);

    const barStyle = {
        height: barHeight + '%'
    }

    return (
        <div>            
            <div className='timeContainer'>
                <div style={barStyle} className='innerBar' ></div>
            </div>
            <p>TIME: {time}</p>
         </div>
         );
}

export default TimeBar;