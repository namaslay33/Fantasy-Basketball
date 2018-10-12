import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
   
  try{
    const response = await axios.post('/signup', formProps)

    dispatch({type: AUTH_USER, payload: response.data.token});
    console.log(response.data.token)
    localStorage.setItem('token', response.data.token);

    callback();
  }
  catch(e){
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }

  // .then(() => {
  //   console.log(response.data.token)
  // })

  // console.log(response)
};

export const signin = (formProps, callback) => async dispatch => {
   
  try{
    const response = await axios.post('/signin', formProps)

    dispatch({type: AUTH_USER, payload: response.data.token});
    console.log(response.data.token)
    localStorage.setItem('token', response.data.token);

    callback();
  }
  catch(e){
    dispatch({ type: AUTH_ERROR, payload: 'Invalid username and/or password' });
  }

  
};


  // export const signin = () => {
  //   return {
  //     type: AUTH_USER,
  //     payload: ''
  //   };
  // };

  export const signout = () => {

    localStorage.removeItem('token');
    
    return {
      type: AUTH_USER,
      payload: ''
    };
};