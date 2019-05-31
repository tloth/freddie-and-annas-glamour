import React from 'react';
import { ReactComponent as Flower1 } from '../assets/flowerHead1.svg';
import { ReactComponent as Flower2 } from '../assets/flowerHead2.svg';

const FlowerPile = ({ flowerCount, setFlowerCount, position, time}) => {

    React.useEffect(() => {
        if (time !== 0) {
        const handleKeyDown = event => {
            if (event.key === 'a' && position ==='left') setFlowerCount(prevCount => prevCount+1);
            if (event.key === 'l' && position ==='right') setFlowerCount(prevCount => prevCount+1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        } else {
            alert('No more time, no more flowers!');
        };
    }, [time, position, setFlowerCount]);

    return (
    <div>
        {position === 'left' ? <Flower2 className='flower' /> : <Flower1 className='flower'/>}
        <h2>FLOWERS GIVEN: {
            flowerCount
        }</h2>
    </div>
    );
}

export default FlowerPile;