import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Homepage = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <nav>
      <div className="nav-bar">
        <div className="nav-links-wrapper">
          <Link to="/premium">Premium</Link>
          <Link to="/support">Support</Link>
          <Link to="/download">Download</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </div>
        <div className="nav-logo">
          <Link to="/">
            <img src={window.revLogoURL}/>
          </Link>
        </div>
      </div>
        <div className="row-items-1">
          <div className="row-content">
            <h5>SLAPIFY PREMIUM</h5>
            <h1>Subscribe to Slap army and get exclusive releases on latest music</h1>
            <h3>Jam out to your favorite music.</h3>
            <button className='.apple-btn'>JOIN SLAP ARMY NOW</button>
            <p></p>
          </div>
        <div className="photo">
          <img className="rave-photo" src={window.raveURL}/>
        </div>
      </div>
    </nav>
  );
  const loggedIn = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.email}!</h2>
    </hgroup>
  );

  return currentUser ? loggedIn() : notLoggedIn();
};

export default Homepage;
