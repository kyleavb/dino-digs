import React from 'react';
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
import { AppBar } from 'material-ui'

const NavBar = (props) => (
  <Router>
    <div>
      <AppBar title='Dino Diggz'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Search'>Search</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Signup'>Sign Up!</Link>
          <Link to='/Profile'>Profile</Link>
        </nav>
        <br />
      </AppBar>
      <Route exact path='/' render={() => <Home />} />
      <Route path='/Search' render={() => <Search />} />
      <Route path='/Login' render={() => <Login />} />
      <Route path='/Signup' render={() => <Signup />} />
      <Route path='/Profile' render={() => <UserProfile />} />
    </div>
  </Router>
)
export default NavBar
