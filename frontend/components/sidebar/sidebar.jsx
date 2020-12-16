import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CgHome } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="filler"></div>
        <div className="side-nav">
          <Link to={'/'}>
            <span className="nav-icon">
              <CgHome />
            </span> Home
          </Link>
          <Link to={'/search'}>
            <span className="nav-icon">
              <BiSearch />
            </span> Search
          </Link>
        </div>
        <Link to={'/'}>
          <img src={window.revLogoURL} className="sidebar-logo"/>
        </Link>
      </div>
    )
  }
}

export default Sidebar;