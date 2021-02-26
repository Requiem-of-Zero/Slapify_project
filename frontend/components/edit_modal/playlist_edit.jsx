// import React from 'react'
import Modal from 'react-modal';
import { TextField } from '@material-ui/core';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#282828',
    borderRadius : '10px',
    width: '30%',
    height: '35%',
    border: 'none',
  },
  overlay: {
    background: 'rgba(0,0,0,.7)',
    zIndex: '10'
  }
};

import React, { Component } from 'react'

export default class PlaylistEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      playlistId: this.props.playlist.id,
      playlistName: this.props.playlist.playlistName
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleEnter(e) {
    if(e.key === 'Enter') {
      // debugger
      this.props.updatePlaylist({
        id: this.state.playlistId,
        playlistName: this.state.playlistName,
      }),
      this.setState({ isOpen: !this.state.isOpen})
    }
  }

  handleSubmit() {
    this.props.updatePlaylist({
      id: this.state.playlistId,
      playlistName: this.state.playlistName,
    }),
    this.setState({ isOpen: !this.state.isOpen})
  }

  handleModal() {
    this.setState({isOpen: !this.state.isOpen})
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value})
  }

  render() {
    const { albums, playlist } = this.props
    return (
      <div className='edit-modal'>
        <h1 className='modal-btn pointer' onClick={() => this.handleModal()}>{playlist.playlistName}</h1>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.handleModal()}
          style={customStyles}
          contentLabel="Edit"
          ariaHideApp={false}
        >
          
          <h2 className='modal-edit'>Edit details</h2>
          <div className="edit-form">
            {Object.values(albums).length < 4 
              ? <img 
                  src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=1.0&px=999"
                  className='playlist-cover'
                />
              : <ul 
                  className='cover-cluster'
                >
                <li
                  className='indiv-playlist-img'
                >
                  {Object.values(albums).slice(0, 4).map(album => <img src={album.imgUrl} />)}
                </li>
              </ul>
            }
            <form>
              <div className="name-input">
                <TextField
                  className='textfield'
                  fullWidth
                  autoFocus
                  label='Name'
                  value={this.state.playlistName} 
                  onChange={this.handleChange('playlistName')}
                  onKeyPress={this.handleEnter.bind(this)}
                  autoComplete='off'
                />
                <button onClick={this.handleSubmit.bind(this)}>SAVE</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}
