import { getAlbum } from '../../actions/album_actions';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getSongsByAlbumId } from '../../reducers/selectors'
import { updateCurrentSong } from '../../actions/music_player_actions'

const mstp = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  songs: getSongsByAlbumId(state, +ownProps.match.params.albumId),
  currentUser: state.entities.users[state.session.id],
  imgUrl: state.entities.albums[ownProps.match.params.albumId].imgUrl
});

const mdtp = dispatch => ({
  getAlbum: id => dispatch(getAlbum(id)),
  updateCurrentSong: song => dispatch(updateCurrentSong(song))
});

export default connect(mstp, mdtp)(AlbumShow);