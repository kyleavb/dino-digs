import React, { Component } from 'react';

class UserProfile extends Component {

  render(){
    return(
      <div className="user-profile">
        <h2>Hello Username (placeholder)</h2>
        <p>Name: Tim H</p>
        <p>Email: t@t.com </p>
        <img src="../img/standing-dino.png" alt="pictur-of-user"/>
      </div>
    )
  }
}

export default UserProfile
