import React from 'react';

class LoggedInHomepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {currentUser, logout} = this.props;

    return(
      <hgroup className="header-group">
        <h2 className="header-name">{currentUser.email}!</h2>
        <button onClick={logout}>Log Out</button>
      </hgroup>
    )
  }
}

export default LoggedInHomepage;