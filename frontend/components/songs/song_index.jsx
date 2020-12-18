import React from 'react';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSongs()
  }

  render() {
    const { songs, updateCurrentSong } = this.props;

    if (!songs.length) return null;
    return (
      // <audio controls>
      //   <source src={song.audioUrl} type="audio/mpeg"/>
      // </audio>
      <div>
        <ul>
          {songs.map(song => <SongIndexItem songs={songs} url={song.url} 
                                            song={song} 
                                            key={song.id} 
                                            updateCurrentSong={updateCurrentSong}/>)}
        </ul>
      </div>
    )
  }
}

export default SongIndex;