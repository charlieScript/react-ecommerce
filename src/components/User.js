import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from "react-redux";


function User(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/login')
    }
  }, [])
  return (
    <div className='mt-24'>
      <h1>User Loaded</h1>
    </div>
  )
}

export default User;
