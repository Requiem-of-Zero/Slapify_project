import React, { Component } from 'react';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends Component {
  componentDidMount() {
    this.props.getAllAlbums()
    this.props.getAllArtists()
  }

  render() {
    const { albums, artists } = this.props;
    
    if (!albums.length) return null;
    return (
      <div>
        <h1 className='featured'>Featured</h1>
        <div className='albums-border'>
          <ul className='albums'>
            {albums.map(album => <AlbumIndexItem album={album} key={album.id} 
                                                  id={album.id} imgUrl={album.imgUrl}
                                                  artists={artists}/> )}
          </ul>
        </div>
      </div>
    )
  }
}

export default AlbumIndex;