import React from 'react';

const UserProfile = (props) => (
  <div className="user-profile">
    <h2>User</h2>
    <ul className="user-details">
      <li>user email</li>{' '}
      <li><a href='#'>Update Profile</a></li>{' '}
      <li><a href='#'>Delete Profile</a></li>
    </ul>
  </div>
)

export default UserProfile;
