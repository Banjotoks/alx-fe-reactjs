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

    const { data, error, isLoading, isError } = useQuery(
        'posts', 
        fetchPosts
        {
            cacheTime: 5 * 60 * 1000, // 5 minutes
            staleTime: 1 * 60 * 1000, // 1 minute
            refetchOnWindowFocus: true,
            keepPreviousData: true,

        }
    );
    if (isLoading) {
        return <div>Loading.....</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }
  
  
  return (
    <div>
        <h1>Posts Component</h1>
        <button onClick={() => refetch()}>Refetch Posts Component</button>
        <ul>
            {data.map(post => 
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
        </div>
  )
}

export default PostsComponent