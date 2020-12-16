import { getAllSongs } from '../../actions/song_actions';
import { updateCurrentSong } from '../../actions/music_player_actions';
import { getAllAlbums } from '../../actions/album_actions';
import { connect } from 'react-redux';
import Search from './search';

const mstp = ({ entities: {songs} }) => ({
  songs: Object.values(songs)
})

const mdtp = dispatch => ({
  getAllSongs: () => dispatch(getAllSongs()),
  updateCurrentSong: song => dispatch(updateCurrentSong(song)),
})

export default connect(mstp, mdtp)(Search);