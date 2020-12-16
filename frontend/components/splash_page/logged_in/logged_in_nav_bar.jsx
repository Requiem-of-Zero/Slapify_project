import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai';

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: 'hidden'
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown(){
    const { showDropdown } = this.state;
    showDropdown === 'show' 
    ? this.setState({showDropdown: 'hidden'}) 
    : this.setState({showDropdown: 'show'})
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <hgroup className="header-group">
        <div className="profile">
          <button onClick={this.toggleDropdown} className="header-name"><AiOutlineSmile />{currentUser.email}</button>
          <div className={`dropdown ${this.state.showDropdown}`}>
            <button onClick={logout} className="logout-btn">Log Out</button>
          </div>
        </div>
      </hgroup>
    )
  }
}

export default LoggedInNav;