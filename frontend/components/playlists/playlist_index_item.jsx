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
        <li>
          <ContextMenuTrigger id='playlist-edits'>
            <Link to={`/playlists/${id}`}>
              { playlistName }
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
