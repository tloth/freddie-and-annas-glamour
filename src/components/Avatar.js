import React from 'react';

import { ReactComponent as AvatarLeft } from '../assets/avatar1.svg';
import { ReactComponent as AvatarRight } from '../assets/avatar2.svg';

const Avatar = ({ userData, position }) => {

    if (!userData) {
        return <h3>...WAIT FOR IT</h3>;
    }

    const { avatar_url, login } = userData;

    return (
        <div className="avatarContainer">
            {/* <SearchBar /> */}
            <img className={position} src={avatar_url} alt="Flower Friend" />
            <div className="bodyAndFlower">
            { position === 'left' ? <AvatarLeft className="avatar"/> : <AvatarRight className="avatar"/> }
            {/* { position === 'left' ? <Flower1 className="handFlower1" /> : <Flower2 className="handFlower2" /> } */}
            </div>
            <h1>{login}</h1>
        </div>
    ) 
}  


export default Avatar;