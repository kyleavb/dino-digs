import React, {Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Search from './Search'
import Signup from './Signup'
import UserProfile from './UserProfile'
// import { AppBar } from 'material-ui'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state={
      name: 'T-Rex',
      realName: 'Little Foot',
      email: 'ApexPred@jurassic.park',
      password: '',
      loggedIn: false,
      redirectTo: null
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }
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

  toggleLogin(e){
    console.log(this.state.loggedIn)
    this.setState({

      loggedIn: !this.state.loggedIn,
    })
  }

  render(){
    var loggin = this.state.loggedIn ? <Link to='/Profile'>Profile</Link> : <Link to='/Login'>Login</Link>
    return(
      <Router>
      <div>
        <nav>
          <div className='nav-wrapper teal darken-3'>
            <a href='/' className='brand-logo'>Dino Diggz</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Search'>Search</Link></li>
              <li>{loggin}</li>
            </ul>
          </div>
        </nav>
            <br />

          <Route exact path='/' render={() => <Home />} />
          <Route path='/Search' render={() => <Search />} />
          <Route path='/Login' render={() => <Login changeName={this.handleNameChange} changeEmail={this.handleEmailChange} changePassword={this.handlePasswordChange} toggle={this.toggleLogin}/>} />
          <Route path='/Signup' render={() => <Signup  />} />
          <Route path='/Profile' render={() => <UserProfile real={this.state.realName} name={this.state.name} email={this.state.email} />} />
        </div>
      </Router>
    )
  }
}
export default NavBar
