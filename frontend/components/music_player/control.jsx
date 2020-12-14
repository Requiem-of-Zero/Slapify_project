import React from 'react';

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnStatus: 'play-btn'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    if(this.props.songState === 'playing'){
      this.setState({btnStatus: 'play-btn'})
    } else {
      this.setState({btnStatus: 'pause-btn'})
    }
  }

  render() {
    const { playMusic } = this.props;
    return (
      <div>
        <button className={this.state.btnStatus} onClick={this.handleClick}>
          <img src={window.playURL}/>
        </button>
      </div>
    )
  }
}

export default Control;