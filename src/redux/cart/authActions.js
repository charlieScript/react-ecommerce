import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from './authTypes';

// CHECK TOKEN AND LOAD USER - getstate - redux state
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({
    type: USER_LOADING,
  });

  // fetch the user
  axios
    .get('http://localhost:5000/profile', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// register user
export const register = ({ name, email, password }) => (dispatch) => {
  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post('http://localhost:5000/api/users', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'),
      );
    });
};

// login users
export const login = ({ email, password }) => (dispatch) => {
  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // request body
  const body = JSON.stringify({ email, password });

  axios
    .post('http://localhost:5000/login', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'),
      );
    });
};

// logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

//setup config
export const tokenConfig = (getState) => {
  // get token from localstaorage
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // if there is a token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
