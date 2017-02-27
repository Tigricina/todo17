import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';
import AuthPage from './components/auth';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/list' component={App} />
    <Route path='/' component={AuthPage} />

  </Router>,
  document.getElementById('root')
);

