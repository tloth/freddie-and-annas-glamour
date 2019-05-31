import React from 'react';
import { getUserData } from '../utils/getUser';

import { ReactComponent as AvatarLeft } from '../assets/avatar1.svg';
import { ReactComponent as AvatarRight } from '../assets/avatar2.svg';
import { ReactComponent as Flower1 } from '../assets/flowerHead1.svg';
import { ReactComponent as Flower2 } from '../assets/flowerHead2.svg';

const Avatar = ({ userData, setUserData, username, position }) => {

    React.useEffect(() => {
        getUserData(username).then(response => setUserData(response));
    }, []);

    if (!userData) {
        return <h3>...WAIT FOR IT</h3>;
    }

    const { avatar_url, login, followers } = userData;

    return (
        <div className="avatar">
            {/* <SearchBar /> */}
            <img className={position} src={avatar_url} alt="Flower Friend" />
            <div className="bodyAndFlower">
            { position === 'left' ? <AvatarLeft /> : <AvatarRight /> }
            {/* { position === 'left' ? <Flower1 className="handFlower1" /> : <Flower2 className="handFlower2" /> } */}
            </div>
            <h1>{login}</h1>
        </div>
    ) 
}  


export default Avatar;