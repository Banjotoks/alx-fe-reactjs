import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChage = (e) => {
        setUsername(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (username.trim()) {
            navigate('/user/${username}');
            setLoading(true);
            setError(null);
            setUserData(null);
            try{
                const data = await fetchUserData(username)
                setUserData(data);
            } catch (err) {
                setError('looks like we cant find the user');
            } finally {
                setLoading(false);
            }
        }
    };

  return (
    <div>
        <h2>Search Github User</h2>
        <form onSubmit={handleFormSubmit}>
            <input
            type='text'
            placeholder='Enter Github Username'
            value={username}
            onChange={handleInputChage} 
            />
            <button type='submit'>Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
            <div>
                <h3>{userData.login}</h3>
                <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width='150' />
                <p>{userData.bio}</p>
                <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>
                    Visit Github Profile
                </a>
            </div>
        )}
        </div>
  );
}

export default Search;