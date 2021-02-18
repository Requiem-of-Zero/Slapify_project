// import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
      this.props.updatePlaylist({
        id: this.state.playlistId,
        playlistName: this.state.playlistName,
      }),
      this.setState({ isOpen: !this.state.isOpen})
    }
  }

  handleModal() {
    this.setState({isOpen: !this.state.isOpen})
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value})
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleModal()}>Edit</button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.handleModal()}
          style={customStyles}
          contentLabel="Edit"
          ariaHideApp={false}
        >
          
          <h2>Hello</h2>
          <button onClick={() => this.handleModal()}>close</button>
          <div>Update Playlist:</div>
          <form>
            <input 
              value={this.state.playlistName} 
              onChange={this.handleChange('playlistName')}
              onKeyPress={this.handleEnter.bind(this)}
              autoComplete='off'
            />
          </form>
          <button></button>
        </Modal>
      </>
    )
  }
}
