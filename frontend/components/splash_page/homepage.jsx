import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './logged_out/header'
import LoggedOutHomepage from './logged_out/logged_out_homepage';
import LoggedInHomepage from './logged_in/logged_in_homepage';
import NavBarContainer from '../../components/nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar'

const Homepage = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <LoggedOutHomepage />
  );
  const loggedIn = () => (
    <LoggedInHomepage currentUser={currentUser} logout={logout} />
  );

  return (
    <div>
      <NavBarContainer />
      {currentUser ? loggedIn() : notLoggedIn()}
    </div>
  );
};

export default Homepage;
