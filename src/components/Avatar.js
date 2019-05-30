import React from 'react';
import { getUserData } from '../utils/getUser';

import { ReactComponent as AvatarLeft } from '../assets/avatar1.svg';
import { ReactComponent as AvatarRight } from '../assets/avatar2.svg';

const Avatar = ({ userData, setUserData, username, position }) => {

    React.useEffect(() => {
        getUserData(username).then(response => setUserData(response));
    }, []);

    if (!userData) {
        return <h3>...WAIT FOR IT</h3>;
    }

    const { avatar_url, login, followers } = userData;

    return (
        <div>
            <img src={avatar_url}/>
            { position === 'left' ? <AvatarLeft /> : <AvatarRight /> }
            <h1>{login}</h1>
        </div>
    ) 
}  


export default Avatar;