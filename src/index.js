import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';

const store = createStore(
    reducers,
    {auth: {authenticated: localStorage.getItem('token')}},
    applyMiddleware(reduxThunk)
  );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
