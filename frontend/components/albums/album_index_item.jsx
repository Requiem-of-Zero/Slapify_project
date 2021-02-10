import React, { Component } from 'react';
import { TiSortNumericallyOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album, albumId, artist } = this.props;
    // const artist = artists[album.artistId]

    return albumId !== undefined ? (
      <li className="album-wrapper">
        <Link to={`/albums/${albumId}`}>
          <img className="album-idx" src={album.imgUrl} />
          <h3 className="album-name">{album.albumName}</h3>
          <h2 className="artist-name">{artist.name}</h2>
        </Link>
      </li>
    ) : null;
  }
}

export default AlbumIndexItem;