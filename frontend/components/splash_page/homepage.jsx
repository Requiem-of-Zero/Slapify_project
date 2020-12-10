import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header'
import LoggedOutHomepage from './logged_out_homepage'
import LoggedInHomepage from './logged_in_homepage'


const Homepage = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <LoggedOutHomepage />
  );
  const loggedIn = () => (
    <LoggedInHomepage currentUser={currentUser} logout={logout} />
  );

  return currentUser ? loggedIn() : notLoggedIn();
};

export default Homepage;
