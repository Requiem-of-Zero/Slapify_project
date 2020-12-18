import { getAllAlbums, getAlbum } from '../../actions/album_actions';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { getAllArtists } from '../../actions/artist_actions';

const mstp = state => ({
  albums: Object.values(state.entities.albums),
  artists: state.entities.artists
});

const mdtp = dispatch => ({
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAlbum: albumId => dispatch(getAlbum(albumId)),
  getAllArtists: () => dispatch(getAllArtists())
});

export default connect(mstp, mdtp)(AlbumIndex);