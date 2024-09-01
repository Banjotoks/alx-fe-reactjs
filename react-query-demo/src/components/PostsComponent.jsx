import React from 'react'
import { useQuery } from 'react-query'

function PostsComponent() {
    // Function to fetch posts data
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    };

    const { data, error, isLoading, isError } = useQuery('posts', fetchPosts)
    if (isLoading) {
        return <div>Loading.....</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }
  
  
  return (
    <div>
        <h1>Posts Component</h1>
        </div>
  )
}

export default PostsComponent