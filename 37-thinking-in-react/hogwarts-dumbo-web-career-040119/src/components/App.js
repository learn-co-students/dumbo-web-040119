import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterBar from './FilterBar'
import HogsContainer from './HogsContainer'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {
  state = {
    filterValue: false,
    sortValue: ""
  }

  handleChange = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
  }

  toggleFilter = () => {
    this.setState({
      filterValue: !this.state.filterValue
    })
  }

  sortHogs = () => {
    if(this.state.sortValue === "name") {
      return [...hogs].sort((hogA, hogB) => {
        if(hogA.name > hogB.name){
          return 1
        } else if(hogA.name < hogB.name){
          return -1
        } else {
          0
        }
      })
    } else if(this.state.sortValue === "weight"){
      return  [...hogs].sort((hogA, hogB) => {
        if(hogA[weight] > hogB[weight]){
          return 1
        } else if(hogA[weight] < hogB[weight]){
          return -1
        } else {
          0
        }
      })
    } else {
      return hogs
    }
  }

  applyFilter = (finalHogs) => {
    if(this.state.filterValue){
      return finalHogs.filter(hog => {
        return hog.greased
      })
    } else {
      return finalHogs
    }
  }

  render() {
    console.log(this.state.filterValue)
    return (
      <div className="App">
          <Nav />
          <FilterBar toggleFilter={this.toggleFilter} handleChange={this.handleChange} />
          <HogsContainer hogs={this.applyFilter(this.sortHogs())} />
      </div>
    )
  }
}

export default App;
