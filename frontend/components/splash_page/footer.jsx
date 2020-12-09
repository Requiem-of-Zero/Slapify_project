import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer className='footer-wrapper'>
        <Link to="/">
            <img src={window.revLogoURL}/>
        </Link>
      </footer>
    )
  }
}

export default Footer;