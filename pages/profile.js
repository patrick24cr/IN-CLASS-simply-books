import React from 'react';
import Signout from '../components/Signout';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <div>displayName: {user.displayName}</div>
      <div>photoURL: {user.photoURL}</div>
      <div>email: {user.email}</div>
      <div>lastLoginAt: {user.lastLoginAt}</div>
      <Signout />
    </>
  )
}
