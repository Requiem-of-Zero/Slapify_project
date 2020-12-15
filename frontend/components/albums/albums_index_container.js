import { getAllAlbums, getAlbum } from '../../actions/album_actions';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';

const mstp = state => ({
  albums: Object.values(state.entities.albums)
});

const mdtp = dispatch => ({
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAlbum: albumId => dispatch(getAlbum(albumId))
});

export default connect(mstp, mdtp)(AlbumIndex);