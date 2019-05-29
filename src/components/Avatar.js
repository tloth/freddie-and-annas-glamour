import React from 'react';
import { getUserData } from '../utils/getUser';

import { ReactComponent as Avatar1 } from '../assets/avatar1.svg';

const Avatar = props => {
    const [userData, setUserData] = React.useState(null);

    React.useEffect(() => {
        const username = 'tloth'; // GET THIS FROM FORM ON PAGE
        getUserData(username).then(response => setUserData(response));
    }, []);

    if (!userData) {
        return <h3>...WAIT FOR IT</h3>;
    }

    const { avatar_url, login, followers } = userData;

    return (
        <div>
            <Avatar1 />
            <h1>{userData.login}</h1>
        </div>
    )
}

export default Avatar;