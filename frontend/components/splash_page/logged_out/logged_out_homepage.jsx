import React from 'react';
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom'

class LoggedOutHomepage extends React.Component {
  render() {
    return(
      <article>
      <div className="row-container">
        <div className="row-items-1 row-items">
          <div className="row-1 row">
            <div className="row-content">
              <h5>SLAPIFY PREMIUM</h5>
              <h1>Get 1 month of Premium for free</h1>
              <h3>Enjoy ad-free head-banging music, and much more. Cancel anytime.</h3>
              <Link to={'/signup'} className='row-1-btn btn'>GET 1 MONTH FREE</Link>
              <p>Individual plan only. Only $5.00/month after.
                Offer not available to users who already tried Premium.
                <span><a href='#'>Terms and conditions apply.</a></span> Offer ends Dec 31, 2021.</p>
            </div>
            <div className="photo">
              <img className="rave-photo" src={window.raveURL}/>
            </div>
          </div>
        </div>
        <div className="row-items-2 row-items">
          <div className="row-2 row">
            <div className="photo-2">
              <img className="no-music-photo" src={window.nomusicURL} width="400" height="400"/>
            </div>
            <div className="row-content-2">
              <h5>2020 SAVED</h5>
              <h1>Revive your life with the universal language.</h1>
              <h3>Treat your life to the music <span><strong>YOU want</strong></span>.</h3>
              <Link to={'/login'} className='row-2-btn btn'>EXPLORE VIBES</Link>
            </div>
          </div>
        </div>
        <div className="row-items-3 row-items">
          <div className="row-3">
            <div className="row-content-3 center">
              <h5>SLAPIFY FREE</h5>
              <h1>Let there be slaps.</h1>
              <h3>Select songs and albums. No credit card needed.</h3>
              <Link to={'/signup'} className='free-btn btn'>GET SLAPIFY FREE</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </article>
    )
  }
}

export default LoggedOutHomepage;