import React, { Component } from 'react'

export default class PlaylistShow extends Component {
  render() {
    return (
      <div>
        <img src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=1.0&px=999"/>
        {console.log(this.props.currPlaylistId)}
      </div>
    )
  }
}
