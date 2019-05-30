import React from 'react';

const TimeBar = props => {

    const [time, setTime] = React.useState(10);

    const decrement = () => {
        setTime(oldTime => {
           if (oldTime === 0) return 0;
           else {
                window.setTimeout(decrement, 1000);
                return oldTime - 1;
           }
        })
    }

    return (
    <div> 
        <button onClick={decrement}>CLICK ME</button> 
        <p>Time: {time}</p>
    </div>
         );
}

export default TimeBar;