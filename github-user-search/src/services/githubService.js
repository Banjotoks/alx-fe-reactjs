import axios from 'axios';


export const fetchUserData = async (username, location, minRepos) => {
    let query = `q=${username}`;
    if (location.trim()) {
        query += `+location:$(location)`;
    }

    if (minimumRepos) {
        query+= `+repos:>=${minRepos}`;
    }

    const searchUrl = `https://api.github.com/search/users?q={query}`
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data.items;
    } catch (error) {
        throw new Error('Search failed or user not found'); 
    }
};