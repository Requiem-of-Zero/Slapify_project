import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends Component {
  render() {
    const { album, id } = this.props;
    console.log(album, "album");
    return (
      <li className="album-wrapper">
        <Link to={`/albums/${id}`}>
          <img className="album-idx" src={album.imgUrl} />
          <h3>{album.albumName}</h3>
        </Link>
      </li>
    )
  }
}

export default AlbumIndexItem;