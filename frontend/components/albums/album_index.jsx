import React, { Component } from 'react';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends Component {
  componentDidMount() {
    this.props.getAllAlbums()
  }
  render() {
    const { albums } = this.props;
    console.log(albums);
    
    if (!albums.length) return null;
    return (
      <div>
        <ul>
          {albums.map(album => <AlbumIndexItem album={album} id={album.id} imgUrl={album.imgUrl}/> )}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex;