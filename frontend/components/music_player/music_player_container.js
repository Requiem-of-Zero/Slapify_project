import 
{ 
  receiveSong,
  receiveQueue,
  playSong,
  pauseSong,
  nextSong,
  prevSong,
  loopSongs,
  shuffleSongs,
} 

from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { getArtist } from '../../actions/artist_actions';
import { getAllAlbums } from '../../actions/album_actions';
import { getAllSongs } from '../../actions/song_actions';

const mstp = ({ music, entities, session}) => {
  // currentSong: state.entities.songs[state.ui.musicPlayer.currentSongId],
  // songs: state.entities.songs,
  // playing: state.ui.musicPlayer.playing,
  // previousTrack: state.ui.musicPlayer.previousTrack,
  // queue: state.ui.musicPlayer.queue,
  // shuffled: state.ui.musicPlayer.shuffled,
  // albums: state.entities.albums
  let currentSong, currentAlbum, currentArtist;

  if (music.currentSong)  {
    currentSong = music.currentSong;
    currentAlbum = entities.albums[currentSong.albumId];
    currentArtist = entities.artists[currentAlbum.artistId];
  }

  return {
    music,
    currentSong,
    currentAlbum,
    currentArtist,
  }
};

const mdtp = dispatch => ({
  // updateCurrentSong: songId => dispatch(updateCurrentSong(songId)),
  // getArtist: artistId => dispatch(getArtist(artistId)),
  // updateCurrentSong: songId => dispatch(updateCurrentSong(songId)),
  // getAllAlbums: () => dispatch(getAllAlbums()),
  // getAllSongs: () => dispatch(getAllSongs()),
  // receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
  prevSong: () => dispatch(prevSong()),
  nextSong: () => dispatch(nextSong()),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  loopSongs: () => dispatch(loopSongs()),
  shuffleSongs: () => dispatch(shuffleSongs()),
  // receiveQueue: queue => dispatch(receiveQueue(queue)),
  // receiveShuffled: songs => dispatch(receiveShuffled(songs)),
});

export default connect(mstp, mdtp)(MusicPlayer);