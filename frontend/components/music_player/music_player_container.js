import 
{ 
  receiveCurrentSong,
  receiveQueue,
  receivePreviousSong,
  receiveNextSong,
  playSong,
  pauseSong,
  receiveShuffled,
  updateCurrentSong
} 
from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { getArtist } from '../../actions/artist_actions';
import { getAllAlbums } from '../../actions/album_actions';
import { getAllSongs } from '../../actions/song_actions';

const mstp = ({currentSong, entities: {albums, artists}}) => ({
  // currentSong: state.entities.songs[state.ui.musicPlayer.currentSongId],
  // songs: state.entities.songs,
  // playing: state.ui.musicPlayer.playing,
  // previousTrack: state.ui.musicPlayer.previousTrack,
  // queue: state.ui.musicPlayer.queue,
  // shuffled: state.ui.musicPlayer.shuffled,
  // albums: state.entities.albums
  song: currentSong,
  album: albums[currentSong.albumId],
  artist: ''
});

const mdtp = dispatch => ({
  // updateCurrentSong: songId => dispatch(updateCurrentSong(songId)),
  getArtist: artistId => dispatch(getArtist(artistId)),
  updateCurrentSong: songId => dispatch(updateCurrentSong(songId)),
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAllSongs: () => dispatch(getAllSongs()),
  receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
  receivePreviousSong: songId => dispatch(receivePreviousSong(songId)),
  receiveNextSong: songId => dispatch(receiveNextSong(songId)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  receiveShuffled: songs => dispatch(receiveShuffled(songs)),
});

export default connect(mstp, mdtp)(MusicPlayer);