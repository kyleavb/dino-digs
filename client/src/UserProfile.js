import React, { Component } from 'react';

class UserProfile extends Component {

  render(){
    return(
      <div className="user-profile">
        <h2>Hello {this.props.name}</h2>
        <p>Name: {this.props.real}</p>
        <p>Email: {this.props.email} </p>
        <img src="../img/standing-dino.png" alt="pictur-of-user"/>
      </div>
    )
  }
}

export default UserProfile
