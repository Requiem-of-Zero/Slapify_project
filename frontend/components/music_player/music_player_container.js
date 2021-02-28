import 
{ 
  receiveSong,
  receiveQueue,
  playSong,
  pauseSong,
  nextSong,
  prevSong,
  loopSongs,
  muteSongs,
  shuffleSongs,
  togglePlayPause
} 

from '../../actions/music_player_actions';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mstp = ({ music, entities, session}) => {
  let currentSong, currentAlbum, currentArtist;

  if (music.currentSong)  {
    currentSong = music.currentSong;
    currentAlbum = Object.values(entities.albums).length > 0 ? entities.albums[currentSong.albumId] : {}
    console.log(currentAlbum)
    currentArtist = currentAlbum ? entities.artists[currentAlbum.artistId] : {};
  }

  return {
    music,
    playing: music.playing,
    queue: music.queue,
    currentSong,
    currentAlbum,
    currentArtist,
  }
};

const mdtp = dispatch => ({
  prevSong: () => dispatch(prevSong()),
  nextSong: () => dispatch(nextSong()),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  loopSongs: () => dispatch(loopSongs()),
  shuffleSongs: () => dispatch(shuffleSongs()),
  togglePlayPause: () => dispatch(togglePlayPause()),
});

export default connect(mstp, mdtp)(MusicPlayer);