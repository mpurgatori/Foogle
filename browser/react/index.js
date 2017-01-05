import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux';
import axios from 'axios';

import App from './components/App';
import Bio from './components/Bio';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
