import React from 'react';

const TimeBar = props => {

    const [time, setTime] = React.useState(10);

    const decrement = () => {
        setTime(oldTime => (oldTime === 0) ? 0 : oldTime - 1);
        window.setTimeout(decrement, 1000);
    }

    return (
    <div> 
        <button onClick={decrement}>CLICK ME</button> 
        <p>Time: {time}</p>
    </div>
         );
}

export default TimeBar;