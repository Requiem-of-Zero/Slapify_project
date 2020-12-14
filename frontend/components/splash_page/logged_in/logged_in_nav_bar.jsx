import React from 'react';

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({showDropdown: !e.target.value})
  }

  render() {
    const { currentUser, logout } = this.props;
    let hidden = (this.state.showDropdown) ? "" : "hidden";
    return (
      <hgroup className="header-group">
        <div className="profile">
          <button onClick={this.handleClick} className="header-name">{currentUser.email}!</button>
          <div className={`dropdown ${hidden}`}>
            <button onClick={logout} className="logout-btn">Log Out</button>
          </div>
        </div>
      </hgroup>
    )
  }
}

export default LoggedInNav;