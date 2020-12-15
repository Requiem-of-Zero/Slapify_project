import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends Component {
  render() {
    const { album, id } = this.props;
    console.log(album, "album");
    return (
      <li>
        <Link to={`/albums/${id}`}>{album.albumName}
          <img className="album" src={album.imgUrl} />
        </Link>
      </li>
    )
  }
}

export default AlbumIndexItem;