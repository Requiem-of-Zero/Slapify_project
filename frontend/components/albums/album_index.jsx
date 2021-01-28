import React, { Component } from 'react';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends Component {

  componentDidMount() {
    this.props.getAllAlbums()
    this.props.getAllArtists()
  }

  render() {
    const { albums, artists } = this.props;
    
    return albums && artists ? (
      <div>
        <h1 className='featured'>Featured</h1>
        <div className='albums-border'>

          <ul className='albums'>
            {albums.map((album, idx) => 
              <AlbumIndexItem 
                album={album} 
                key={album.id} 
                albumId={album.id} 
                id={idx} 
                artist={album ? artists[album.artistId] : undefined } 
              />
            )}
          </ul>

        </div>
      </div>
    ) : null;
  }
}

export default AlbumIndex;