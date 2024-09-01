import React, { useState } from 'react';
import PostsComponent from './PostsComponent';

function HomeComponent() {
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>

      {showPosts ? <PostsComponent /> : <div>Welcome to the Home Page!</div>}
    </div>
  );
}

export default HomeComponent;