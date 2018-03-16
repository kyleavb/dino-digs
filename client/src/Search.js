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
    // const cavesSelection = Caves.caves.map((cave, index) => {
    //   <option key={index} value={cave.location}>{cave.location}</option>
    // )}

    return(
      <div>
        <h1> Search </h1>
        <label>
          Select vacation location:
          <select value={this.props.filterValue} onChange={this.handleFilterChange}>
            <option value="Boulder City">Boulder City</option>
            <option value="Scavenge Town">Scavenge Town</option>
            <option value="Club Park">Club Park</option>
            <option value="Fire Hot">Fire Hot</option>
            <option value="Fish good">Fish good</option>
            <option value="Thunder go boom">Thunder go boom</option>
            <option value="By the ocean">By the ocean</option>
          </select>
        </label>
        <br/>
        <label htmlFor="Locations">Search for a Location: </label>
        <input type='text' name='Locations' value={this.props.filterValue} onChange={this.handleFilterChange} />
        <CaveList caves={this.state.display} />
      </div>
    )
  }
}

export default Search
