import React, { Component } from 'react';

class AlbumIndexItem extends Component {
  render() {
    const { album } = this.props;
    return (
      <li>
        {album.albumName}
      </li>
    )
  }
}

export default AlbumIndexItem;