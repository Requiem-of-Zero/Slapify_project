import React from 'react'
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

export default function PlaylistEditModal(props) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [playlistName, setPlaylistName] = React.useState('')
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal(){
    setIsOpen(false);
  }

  function handleChange() {
    setPlaylistName(playlistName)
  }

  return (
    <>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit"
      >
        
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>Update Playlist:</div>
        <form>
          <input value={props.playlist.playlistName} onChange={handleChange}/>
        </form>
      </Modal>
    </>
  )
}
