import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minimumRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const handleInputChange = (e) => {
        if (e.target.name === 'username') setUsername(e.target.value);
        if (e.target.name === 'location') setLocation(e.target.value);
        if (e.target.name === 'minRepos') setMinRepos(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (username.trim()) {
            navigate(`/user/${username}`);
            setLoading(true);
            setError(null);
            setUserData([]);
            setCurrentPage(1);

            try{
                const data = await fetchUserData(username, location, minRepos)
                setUserData(data.items || []);
                setTotalCount(data.total_count);
            } catch (err) {
                setError("Looks like we cant find the user");
            } finally {
                setLoading(false);
            }
        }
    };

    const loadMoreResults = async () => {
        const nextPage = currentPage + 1;
        setLoading(true);
        try{
            const data = await fetchUserData(username, location, minRepos)
            setUserData(prevData => [...prevData, ...data.items]);
            setCurrentPage(nextPage);
        } catch (err) {
            setError("Failed to load more results");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className='bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-6'>Search Github User</h2>
        <form onSubmit={handleFormSubmit} className='space-y-4'>
        <div>
            <input
            type='text'
            name='username'
            placeholder='Enter Github Username'
            value={username}
            onChange={handleInputChange}
            className='w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 border border-gray-300' 
            />
            </div>

            <div>
            <input
            type='text'
            name='location'
            placeholder='Enter Location'
            value={location}
            onChange={handleInputChange}
            className='w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 border border-gray-300' 
            />
            </div>

            <div>
            <input
            type='number'
            name='minRepos'
            placeholder='Minimum Repositories (optional)'
            value={minimumRepos}
            onChange={handleInputChange}
            className='w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 border border-gray-300' 
            />
            </div>

            <button type='submit' className='w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:from-pink-600 hover:to-red-600 transition duration-300 ease-in-out'>Search</button>
        </form>

        {loading && <p className='mt-6 text-gray-600 text center'>Loading...</p>} 
        {error && <p className='mt-6 text-red-600 text center'>{error}</p>}

        {userData.length > 0 && (
            userData.map((user) => (
            <div key={user.login} className='mt-6 bg-gray-100 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-800 mb-4 text-center'>{user.login}</h3>
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className='w-32 h-32 rounded-full shadow-lg' />
                <p className='text-gray-600 text-center mb-4'>{user.bio}</p>
                <a href={user.html_url} target='_blank' rel='noopener noreferrer' className='inline-block py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out'>
                    Visit Github Profile
                </a>
            </div>
        )))}
          {userData.length < totalCount && (
    <button onClick={loadMoreResults} className='mt-6 py-2 px-4 ' >
        Load more
    </button>
)}
        </div>  
  );

}

export default Search;