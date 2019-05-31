import React from 'react';
import { ReactComponent as Flower1 } from '../assets/flowerHead1.svg';
import { ReactComponent as Flower2 } from '../assets/flowerHead2.svg';

const FlowerPile = ({ flowerCount, setFlowerCount, position, time}) => {

    React.useEffect(() => {
        if (time !== 0) {
        const handleKeyDown = event => {
            if (event.key === 'a' && position ==='right') setFlowerCount(prevCount => prevCount+1);
            if (event.key === 'l' && position ==='left') setFlowerCount(prevCount => prevCount+1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        
    } else {
        alert('TIME\'S UP BITCH');
    }
    }, [time, position, setFlowerCount]);
    return (
    <div>
        {position === 'left' ? <Flower1 className='flower' /> : <Flower2 className='flower'/>}
        <h2>FLOWER COUNT: {
            flowerCount
        }</h2>
    </div>
    );
}

export default FlowerPile;