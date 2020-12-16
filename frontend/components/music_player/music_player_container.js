import { updateCurrentSong } from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mstp = ({currentSong, entities: {albums}}) => ({
  song: currentSong,
  album: albums[currentSong.albumId]
})

const mdtp = dispatch => ({
  updateCurrentSong: songId => dispatch(updateCurrentSong(songId))
})

export default connect(mstp, mdtp)(MusicPlayer);