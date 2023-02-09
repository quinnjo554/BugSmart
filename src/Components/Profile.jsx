import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
export const Profile=()=> {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
            <img className='rounded-full h-10' src={user.picture} alt={user.name} />
            <h2 className=' text-black'>{user.name}</h2>
            <p className='text-black'>{user.email}</p>
      </div>
    )
  );
}

export default Profile