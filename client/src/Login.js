import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handle name - passes the active value into state for name
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  // handle email - passes the active value into state for email
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  // handle password - passes the active value into state for password
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  // post the data to the database through axios
  // grab object, make api call
  handleSubmit(e) {
    e.preventDefault()
    // axios.post('/auth/signup', {
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password
    // }).then( results => {
    //   console.log(results.data)

      // you should have the token
      // save this to the localStorage
      // use a more descriptive name for token
      // localStorage.setItem('mernToken', results.data.token)
      // this.props.liftToken(results.data)
    // })
  }
  
  render(){
    return(
      <div>
        <h1> Login </h1>
        <form onSubmit="{this.handleSubmit}">
        Name: <input type='text' value="{this.state.name}" name='name' onChange="{this.handleNameChange}" />
        <br/>
        Email: <input type='text' value="{this.state.email}" name='email' onChange="{this.handleEmailChange}" />
        <br/>
        Password: <input type='password' value="{this.state.password}" name='password' onChange="{this.handlePasswordChange}" />
        <br/>
        <input type='submit' value='Sign Up' />
      </form>
      </div>
    )
  }
}

export default Login
