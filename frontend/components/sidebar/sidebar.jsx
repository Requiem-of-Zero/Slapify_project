import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CgHome } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import PlaylistIndexContainer from '../../components/playlists/playlist_index_container';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="filler"></div>
        <div className="side-nav">
          <Link to={'/'} className="nav-icon">
            <CgHome size={25}/>
            <span> Home </span>
          </Link>
          <Link to={'/search'} className="nav-icon">
            <BiSearch size={25}/>
            <span>Search</span>
          </Link>
          < PlaylistIndexContainer />
        </div>
        <Link to={'/'}>
          <img src={window.revLogoURL} className="sidebar-logo"/>
        </Link>
      </div>
    )
  }
}

export default Sidebar;