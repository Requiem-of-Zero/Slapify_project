import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album, id, artists } = this.props;
    const artist = artists[album.artistId]
    return (
      <li className="album-wrapper">
        <Link to={`/albums/${id}`}>
          <img className="album-idx" src={album.imgUrl} />
          <h3 className="album-name">{album.albumName}</h3>
          <h2>{artist.name}</h2>
        </Link>
      </li>
    )
  }
}

export default AlbumIndexItem;