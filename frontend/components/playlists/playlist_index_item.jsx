import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export default class PlaylistIndexItem extends Component {
  render() {
    const { playlistName, id } = this.props.playlist
    return (
      <div>
        <li className='indiv-playlists'>
          <ContextMenuTrigger id='unique'>
            <Link to={`/playlists/${id}`} className='indiv-playlists'>
              <h6 onMouseEnter={() => this.setState({hoveredPlaylistId: id})}>
                { playlistName }
              </h6>
            </Link>
          </ContextMenuTrigger>

          <ContextMenu id='unique' className="context-menu">
            <MenuItem>Rename</MenuItem>
            <MenuItem divider />
            <MenuItem data={{playlistId: id}} onClick={() => console.log('clicked')}>Delete</MenuItem>
          </ContextMenu>
        </li>
      </div>
    )
  }
}
