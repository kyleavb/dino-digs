import React, { Component } from 'react';

class UserProfile extends Component {

  render(){
    return(
      <div className="user-profile">
        <h2>Hello {this.props.name}</h2>
        <h2>Name: {this.props.real}</h2>
        <h2>Email: {this.props.email} </h2>
        <h2>User Pic: </h2><img src="../img/standing-dino.png" alt="pictur-of-user"/>
      </div>
    )
  }
}

export default UserProfile
