import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className='footer-wrapper'>
          <div className="footer-logo">
            <Link to="/">
              <img src={window.revLogoURL}/>
            </Link>
          </div>
          <div className="redirect-pages">
            <a href="https://www.linkedin.com/in/samuel-wong-61368a194/" target="_blank" rel="noopener noreferrer">
              <img className="redirect" src={window.linkedinURL} alt="LinkedIn" width="30" height="30"/>
            </a>
            <a href="https://www.facebook.com/samuel.wong.984/" target="_blank" rel="noopener noreferrer">
              <img className="redirect" src={window.facebookURL} alt="LinkedIn" width="30" height="30"/>
            </a>
            <a href="https://www.instagram.com/iamsdub/" target="_blank" rel="noopener noreferrer">
              <img className="redirect" src={window.instagramURL} alt="LinkedIn" width="30" height="30"/>
            </a>
            <a href="https://github.com/Requiem-of-Zero" target="_blank" rel="noopener noreferrer">
              <img className="redirect" src={window.githubURL} alt="LinkedIn" width="30" height="30"/>
            </a>
          </div>
        </div>
        <div className="trademark">
          <div className="copyright">
            <p>&copy; 2020 Slapify</p>
          </div>
          <div className="creator">
            <p>Created by: Samuel Wong</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;