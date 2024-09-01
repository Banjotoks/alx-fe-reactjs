import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  
  const { postId } = useParams();

  const mockPosts = {
    1: { title: "First Post", content: "This is the content of the first post." },
    2: { title: "Second Post", content: "This is the content of the second post." },
    
  };


  const post = mockPosts[postId];

  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
