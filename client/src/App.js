import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'
import NavBar from './NavBar'


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
      <NavBar />
      </MuiThemeProvider>

    );
  }
}

export default App;
