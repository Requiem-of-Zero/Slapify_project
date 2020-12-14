import React, { Component } from 'react';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends Component {
  render() {
    const { albums, getAlbum } = this.props;
    return (
      <div>
        <ul>
          {albums.map(album => <AlbumIndexItem album={album} id={album.id} getAlbum={getAlbum} /> )}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex;