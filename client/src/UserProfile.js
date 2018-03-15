import React, { Component } from 'react';
import user_json from './user_json';

const user = user_json.users;

class UserProfile extends Component {
  constructor(props){
    super()
    this.state = {
      user,
    }
  }
  render(){
    return(
      <div className="user-profile">
        <h2>Hello Username (placeholder)</h2>
        <p>Name: Tim H</p>
        <p>Email: t@t.com </p>
        <img src="../img/standing-dino.png" alt="picture of user"/>
      </div>
    )
  }
}

export default UserProfile
