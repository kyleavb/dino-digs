import React, { Component } from 'react'

class Login extends Component {

  render(){
    return(
      <div className='row'>
        <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3 text-bg z-depth-3'>
        <h1> Login </h1>
          <form>
            Name: <input type='text' value={this.props.name} name='name' onChange={this.props.changeName} />
            <br/>
            Email: <input type='text' value={this.props.email} name='email' onChange={this.props.changeEmail} />
            <br/>
            Password: <input type='password' value={this.props.password} name='password' onChange={this.props.changePassword} />
            <br/>
            <input className='waves-effect waves-light btn' type='button' value='Log in' onClick={this.props.toggle}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
