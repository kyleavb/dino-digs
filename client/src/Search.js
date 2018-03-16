import React, { Component } from 'react'
import Caves from './cave_json'
import CaveList from './CaveList'


class Search extends Component {
  constructor(props){
    super(props);
    let allCave = Caves.cave
    this.state = {
      filterValue: '',
      display: allCave
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e){
    e.preventDefault()
    const filterValue = e.target.value
    // console.log(filterValue)
    console.log(Caves.cave)
    // let caves = JSON.parse(Caves)
    this.setState((prevState, props) => {
      // const filteredCaveList = allCave.filter( cave =>
        const filteredCaveList = Caves.cave.filter( cave =>
      cave.location.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      return {
        display: filteredCaveList,
        filterValue
      }
    })
  }

  render(){
    return(
      <div className='row'>
        <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3'>
          <h1> Search </h1>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <label htmlFor="Locations">Locations: </label>
          <input type='text' name='Locations' value={this.props.filterValue} onChange={this.handleFilterChange} />
        </div>
        <div className='col s12 m12 l12'>
          <CaveList caves={this.state.display} />
        </div>
      </div>
    )
  }
}

export default Search
