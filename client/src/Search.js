import React, { Component } from 'react'
import Caves from './cave_json'
import CaveList from './CaveList'


class Search extends Component {
  constructor(props){
    super(props);
    let allCave = Caves.cave
    this.state = {
      filterValue: '',
      display: allCave,
      optionsState: "Boulder City"
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.dropChange = this.dropChange.bind(this)
  }
  dropChange(e){
    this.setState({
      optionsState: e.target.value
    })
  }
  handleFilterChange(e){
    e.preventDefault()
    var filterValue = e.target.value
    // console.log(filterValue)
    console.log("filter change")
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
  datePick(){
    console.log("Yo")
  }
  render(){

    return(
      <div className='row'>
        <div className='row'>
          <h1> Search </h1>
          <div className='col s6 m6 l6 offset-s3 offset-m3 offset-l3 of'>
            <div >
              <label htmlFor ='drop-down'>Select vacation location:</label>
              <select className='browser-default' name='drop-down' value={this.state.optionsState} onChange={this.dropChange}>
                <option value="Boulder City">Boulder City</option>
                <option value="Scavenge Town">Scavenge Town</option>
                <option value="Club Park">Club Park</option>
                <option value="Fire Hot">Fire Hot</option>
                <option value="Fish good">Fish good</option>
                <option value="Thunder go boom">Thunder go boom</option>
                <option value="By the ocean">By the ocean</option>
              </select>
            </div>
            <br />
            <div>
            <br />
              <label htmlFor="Locations">Search for a Location: </label>
              <input type='text' name='Locations' value={this.props.filterValue} onChange={this.handleFilterChange} />
            </div>
         </div>

        </div>
        <div className='row'>
          <div className='col s12 m12 l12'>
            <CaveList caves={this.state.display} datePick={this.datePick}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
