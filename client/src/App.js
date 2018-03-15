import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { AppBar } from 'material-ui'
import Home from './Home'
import Login from './Login'
import Search from './Search'
import Signup from './Signup'
import UserProfile from './UserProfile'

class App extends Component {
  constructor(){
    super()
    this.state = {
      //state
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <div className="nav-container">
              <h1 className='Center'>Kyles Site</h1>
              <nav>
                <Link to='/'>Home</Link>
                <Link to='/Search'>Search</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/Signup'>Sign Up!</Link>
                <Link to='/Profile'>Profile</Link>
              </nav>
              <br />
            </div>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/Search' render={() => <Search />} />
            <Route path='/Login' render={() => <Login />} />
            <Route path='/Signup' render={() => <Signup />} />
            <Route path='/UserProfile' render={() => <UserProfile />}
          </div>
        </Router>
      </MuiThemeProvider>

    );
  }
}

export default App;
