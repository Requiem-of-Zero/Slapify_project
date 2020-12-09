import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
    </nav>
  );
  const loggedIn = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? loggedIn() : notLoggedIn();
};

export default Home;
