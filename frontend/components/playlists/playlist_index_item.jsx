import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export default class PlaylistIndexItem extends Component {
  handleClick(e, data){
    this.props.deletePlaylist(data.playlistId)
  }
  render() {
    const { playlistName, id } = this.props.playlist
    return (
      <div>
        <li className='indiv-playlists'>
          <ContextMenuTrigger id='playlist-edits'>
            <Link to={`/playlists/${id}`} className='indiv-playlists'>
              <h6>{ playlistName }</h6>
            </Link>
          </ContextMenuTrigger>

          <ContextMenu id='playlist-edits' className="context-menu">
            <MenuItem> Rename </MenuItem>
            <MenuItem divider />
            <MenuItem data={{playlistId: id}} onClick={this.handleClick}> Delete </MenuItem>
          </ContextMenu>
        </li>
      </div>
    )
  }
}
