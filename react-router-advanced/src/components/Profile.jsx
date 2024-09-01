import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileSettings from './Profile/ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
