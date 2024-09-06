import React from 'react';

function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 md:p-8 sm:p-4 sm:max-w-sx md:max-w-sm mx-auto, my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full md:w-36 h-36, sm:w-24 h-24 mx-auto" />
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;