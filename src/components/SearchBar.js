import React from 'react';
import { getUserData } from '../utils/getUser';

const SearchBar = ({position, setUserData}) => {

    const [username, setUsername] = React.useState('');

    const handleChange = e => setUsername(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (position === 'left') getUserData(username).then(response => setUserData(response));
        if (position === 'right') getUserData(username).then(response => setUserData(response))
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Choose your flower friend</label>
        <input
        id="username"
        className="searchbar_input"
        value={username}
        onChange={handleChange}
        />
    </form>
    )
}

export default SearchBar;