import React, { Component } from 'react'
import Caves from './cave_json'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterValue: '',
      display: {Caves}
    }
  }
  render(){
    return(
      <div>
        <h1> Search </h1>
        <label htmlFor="Locations">Locations: </label>
        <input type='text' name='Locations' />
      </div>
    )
  }
}

export default Search
