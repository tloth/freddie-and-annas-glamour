import React from 'react';
import { ReactComponent as Flower } from '../assets/flowerHead1.svg';

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
    }, [time]);
    return (
    <div>
        <Flower />
        <h2>Flower count: {
            flowerCount
        }</h2>
    </div>
    );
}

export default FlowerPile;