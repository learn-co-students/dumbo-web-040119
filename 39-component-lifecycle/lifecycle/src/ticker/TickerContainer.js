import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    value: 0
  }

  start = () => {
    this.interval = setInterval(this.generateRandom, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
  }

  // generates random number between 1 and 100
  generateRandom = () => {
    console.log("GENERATING NUMBER")

    this.setState({
      value: Math.round(Math.random()*100)
    })
  }

  componentDidMount(){
    // 1. Fetching***
    // 2. Starting intervals
    // 3. Cookie alert
    // 4. Initializing external libraries

    this.start()
  }

  componentWillUnmount(){
    // Clearing any processes
      // clearing intervals
      // clearing the running of outside libraries
      
    this.stop()
  }

  render(){
    return (
      <div className="box">
        <button onClick={this.stop}>Stop Ticker</button>
        <Ticker value={this.state.value}/>
      </div>
    );
  }
}



export default TickerContainer