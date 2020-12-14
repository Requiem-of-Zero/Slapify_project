import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as SessionAPIUtil from './util/session_api_util'
import Root from './components/root';
import { fetchSong, fetchSongs } from './util/song_api_util'
import { getSong, getAllSongs } from './actions/song_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  
  // window.login = SessionAPIUtil.login
  // window.logout = SessionAPIUtil.logout
  // window.signup = SessionAPIUtil.signup
  window.store = store
  window.gSongs = getAllSongs;
  window.gSong = getSong;
  window.getSong = fetchSong;
  window.getSongs = fetchSongs;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('main')
  ReactDOM.render(<Root store={store}/>, root)
})