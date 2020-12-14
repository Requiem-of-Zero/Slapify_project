import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { song, url } = this.props;
    return (
      <li>
        <button onClick={() => this.props.updateCurrentSong(song)}>
          {song.songName}
        </button>
      </li>
    )
  }
}

export default SongIndexItem;