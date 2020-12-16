import LoggedInNav from '../splash_page/logged_in/logged_in_nav_bar';
import Header from '../splash_page/logged_out/header';
import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const { currentUser, logout } = this.props;
    return(
      <div>
        { currentUser ? 
        <LoggedInNav currentUser={currentUser} logout={logout}/> : 
        <Header/>}
      </div>
    )
  }
}

export default NavBar;