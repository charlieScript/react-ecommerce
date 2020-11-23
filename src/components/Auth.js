import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import { Redirect , Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { loadUser } from "../redux/cart/authActions";

const Auth = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()
  const [auth, setAuth] = useState()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    // setAuth(localStorage.getItem('token'))
    dispatch(loadUser());
  }, [])
  return (
    <Route 
      {...rest} 
      render = {
        props => 
        isAuthenticated ? <Component { ...rest } /> : <Redirect  to='/login' />
      }
    />
  )
}

export default Auth

