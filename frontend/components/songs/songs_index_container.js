import { connect } from 'react-redux';
import { getAllSongs } from '../../actions/song_actions';
import { updateCurrentSong, updateCurrentQueue } from '../../actions/music_player_actions';
import SongIndex from './song_index'

const mstp = (state) => ({
  songs: Object.values(state.entities.songs)
})

const mdtp = dispatch => ({
  updateCurrentSong: song => dispatch(updateCurrentSong(song)),
  getSongs: () => dispatch(getAllSongs()),
})

export default connect(mstp, mdtp)(SongIndex)