import { getAlbum } from '../../actions/album_actions';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getSongsByAlbumId } from '../../reducers/selectors';
import { updateCurrentSong } from '../../actions/music_player_actions';
import { getAllArtists } from '../../actions/artist_actions';

const mstp = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  songs: getSongsByAlbumId(state, +ownProps.match.params.albumId),
  currentUser: state.entities.users[state.session.id],
  artists: state.entities.artists
});

const mdtp = dispatch => ({
  getAlbum: payload => dispatch(getAlbum(payload)),
  updateCurrentSong: song => dispatch(updateCurrentSong(song)),
  getAllArtists: () => dispatch(getAllArtists())
});

export default connect(mstp, mdtp)(AlbumShow);