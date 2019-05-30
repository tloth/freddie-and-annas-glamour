import React from 'react';
import { ReactComponent as Flower } from '../assets/flowerHead1.svg';

const FlowerPile = ({ flowerCount, setFlowerCount, position}) => {

    React.useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'a' && position ==='right') setFlowerCount(prevCount => prevCount+1);
            if (event.key === 'l' && position ==='left') setFlowerCount(prevCount => prevCount+1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        }, []);


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