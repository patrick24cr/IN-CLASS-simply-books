import React from 'react';
import Signout from '../components/Signout';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="text-center my-4">
      <User
        email={user.email}
        name={user.displayName}
        image={user.photoURL}
        lastSignInTime={user.metadata.lastSignInTime}
      />
      {console.warn(user)}
      <Signout />
    </div>
  );
}
