import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Dino Diggz</h1>
        <UserProfile />
      </div>
    );
  }
}

export default App;
