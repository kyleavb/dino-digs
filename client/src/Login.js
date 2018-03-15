import React, { Component } from 'react'

class Login extends Component {

  render(){
    return(
      <div>
        <h1> Login </h1>
        <form>
          Name: <input type='text' value={this.props.name} name='name' onChange={this.props.changeName} />
          <br/>
          Email: <input type='text' value={this.props.email} name='email' onChange={this.props.changeEmail} />
          <br/>
          Password: <input type='password' value={this.props.password} name='password' onChange={this.props.changePassword} />
          <br/>
          <input type='button' value='Log in' onClick={this.props.toggle}/>
        </form>
      </div>
    )
  }
}

export default Login
