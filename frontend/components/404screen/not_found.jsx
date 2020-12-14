import React from 'react';
import Footer from '../splash_page/logged_out/footer';
import Header from '../splash_page/logged_out/header';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <img src={window.notFoundURL} className='not-found' />
        <div className="footer-2">
          <Footer />
        </div>
      </div>
    )
  }
}

export default NotFound;