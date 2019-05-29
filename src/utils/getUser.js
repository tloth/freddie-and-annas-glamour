import { token } from '../token';

const checkResponse = response => {
    if (response.status !== 200) {
        console.log(`Error with request! ${response.status}`);
        return;
    }
    return response.json();
}

export const getUserData = username => {
    const url = `https://api.github.com/users/${username}?access_token=${token}`;
    return fetch(url)
            .then(checkResponse)
            .catch(err => {
                throw new Error(`Fetch getUserData failed! ${err}`);
            });
};