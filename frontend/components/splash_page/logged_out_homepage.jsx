import React from 'react';
import Header from './header'
import Footer from './footer'

class LoggedOutHomepage extends React.Component {
  render() {
    return(
      <article>
      <Header />
        <div className="row-items-1">
          <div className="row-1">
            <div className="row-content">
              <h5>SLAPIFY PREMIUM</h5>
              <h1>Get 1 month of Premium for free</h1>
              <h3>Enjoy ad-free head-banging music, and much more. Cancel anytime.</h3>
              <button className='apple-btn btn'>GET 1 MONTH FREE</button>
              <p>Individual plan only. Only $5.00/month after.
                Offer not available to users who already tried Premium.
                <span><a href='#'>Terms and conditions apply.</a></span> Offer ends Dec 31, 2021.</p>
            </div>
            <div className="photo">
              <img className="rave-photo" src={window.raveURL}/>
            </div>
          </div>
        </div>
      <Footer/>
      </article>
    )
  }
}

export default LoggedOutHomepage;