import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as SessionAPIUtil from './util/session_api_util'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  
  // window.login = SessionAPIUtil.login
  // window.logout = SessionAPIUtil.logout
  // window.signup = SessionAPIUtil.signup
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('main')
  ReactDOM.render(<Root store={store}/>, root)
})