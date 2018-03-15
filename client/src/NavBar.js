import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { AppBar } from 'material-ui'

const NavBar = (props) => (
  <AppBar title='Dino Diggz'>
    <nav>
      <ul className="">
        <Link to='/'>Home</Link>
      </ul>
    </nav>
  </AppBar>
)
export default NavBar
