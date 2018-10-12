import {AUTH_USER, AUTH_ERROR } from './types';

export default function(state = {}, action) {

  const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
  };
  
    switch (action.type) {
      case AUTH_USER:
        return { ...state, authenticated: action.payload };
      case AUTH_ERROR:
        return { ...state, errorMessage: action.payload};
      default:
        return state;
    }
  }