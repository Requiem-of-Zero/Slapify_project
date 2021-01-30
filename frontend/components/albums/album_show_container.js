import { getAlbum } from '../../actions/album_actions';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getSongsByAlbumId } from '../../reducers/selectors';
import { receiveQueue, playSong, pauseSong } from '../../actions/music_player_actions';
import { getAllArtists } from '../../actions/artist_actions';

const mstp = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  songs: getSongsByAlbumId(state, +ownProps.match.params.albumId),
  currentUser: state.entities.users[state.session.id],
  artists: state.entities.artists,
  playing: state.music.playing
});

const mdtp = dispatch => ({
  getAlbum: albumId => dispatch(getAlbum(albumId)),
  getAllArtists: () => dispatch(getAllArtists()),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
});

export default connect(mstp, mdtp)(AlbumShow);