import React, { Component } from 'react'

export default class PlaylistIndexItem extends Component {
  render() {
    const { playlistName } = this.props.playlist
    return (
      <div>
        <li>
          { playlistName }
        </li>
      </div>
    )
  }
}
