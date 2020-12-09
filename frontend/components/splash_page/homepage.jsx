import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header'

const Homepage = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <article>
      <Header />
      <div className="row-items-1">
        <div className="row-content">
          <h5>SLAPIFY PREMIUM</h5>
          <h1>Get 1 month of Premium for free</h1>
          <h3>Enjoy ad-free head-banging music, and much more. Cancel anytime.</h3>
          <button className='apple-btn'>GET 1 MONTH FREE</button>
          <p>Individual plan only. Only $5.00/month after.
            Offer not available to users who already tried Premium.
            <span><a href='#'>Terms and conditions apply.</a></span> Offer ends Dec 31, 2021.</p>
        </div>
        <div className="photo">
          <img className="rave-photo" src={window.raveURL}/>
        </div>
      </div>
    </article>
  );
  const loggedIn = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.email}!</h2>
    </hgroup>
  );

  return currentUser ? loggedIn() : notLoggedIn();
};

export default Homepage;
