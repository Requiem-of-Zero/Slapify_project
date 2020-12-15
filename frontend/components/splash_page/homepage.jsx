import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './logged_out/header'
import LoggedOutHomepage from './logged_out/logged_out_homepage'
import LoggedInHomepage from './logged_in/logged_in_homepage'


const Homepage = ({ currentUser, logout, session, fetchCurrentUser }) => {
  const notLoggedIn = () => (
    <LoggedOutHomepage />
  );
  const loggedIn = () => (
    <LoggedInHomepage currentUser={currentUser} logout={logout} />
  );

  return currentUser ? loggedIn() : notLoggedIn();
};

export default Homepage;
