import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    currentIndex: 0,
    budget: 100
  }

  eatSushi = (sushi) => {
    const newBudget = this.state.budget - sushi.price

    if (newBudget >= 0){
      this.setState({
      eaten: [...this.state.eaten, sushi],
      budget: newBudget
    })
    }
    
  }

  getMoreSushi = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 4
    })
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          getMoreSushi={this.getMoreSushi} 
          eaten={this.state.eaten} 
          eatSushi={this.eatSushi} 
          sushis={this.state.sushis.slice(this.state.currentIndex,this.state.currentIndex+4)} />
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;