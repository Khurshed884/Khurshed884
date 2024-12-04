import React from 'react';
import "../Style/App.css"

function Greeting({ user }) {
  return (
    <div>
      <img
     //   src={user.profilePicture}
        alt={`${user.name}'s Profile`}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Greeting;
