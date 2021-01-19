import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <nav className='nav-bar'>
        <div className="nav-wrapper">
          <div className="nav-links-wrapper">
            {/* <Link to="/premium">Premium</Link>
            <Link to="/support">Support</Link>
            <Link to="/download">Download</Link> */}
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
          </div>
          <div className="nav-logo">
            <Link to="/">
              <img src={window.revLogoURL}/>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;