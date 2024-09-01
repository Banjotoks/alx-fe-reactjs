import React from 'react'
import { outlet, link } from 'react-router-dom'

function profile() {
  return (
    <div>
        <h1>Profile Page</h1>
        <nav>
            <ul>
                <li link to='details'>Profile Details</li>
                <li link to='settings'>Profile Settings</li>
            </ul>
        </nav>
        <outlet />
        </div>
  );
}

export default profile