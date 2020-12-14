import { updateCurrentSong } from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mstp = state => ({
  song: state.currentSong
})

const mdtp = dispatch => ({
  updateCurrentSong: songId => dispatch(updateCurrentSong(songId))
})

export default connect(mstp, mdtp)(MusicPlayer);