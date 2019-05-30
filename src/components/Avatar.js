import React from 'react';
import { getUserData } from '../utils/getUser';

import { ReactComponent as Avatar1 } from '../assets/avatar1.svg';
import { ReactComponent as Avatar2 } from '../assets/avatar2.svg';

const Avatar = ({ userData1, setUserData1, userData2, setUserData2 }) => {
    
    React.useEffect(() => {
        const username1 = 'tloth'; // GET THIS FROM FORM ON PAGE
        const username2 = 'fweddi'; // GET THIS FROM FORM ON PAGE
        getUserData(username1).then(response => setUserData1(response));
        getUserData(username2).then(response => setUserData2(response));
    }, []);

    if (!userData1 || !userData2) {
        return <h3>...WAIT FOR IT</h3>;
    }

    const { avatar_url, login, followers } = userData1;
    const { avatar_url: avatar_url2, login: login2, followers: followers2 } = userData2;

    return (
        <div>
            <img src={avatar_url}/>
            <Avatar1 />
            <h1>{login}</h1>
            <img src={avatar_url2}/>
            <Avatar2 />
            <h1>{login2}</h1>
        </div>
    )
}

export default Avatar;