import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    counter: 0
  }

  increment = (user) => {

    // SHOULD USE CALLBACK SYNTAX
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // this.setState({
    //   pictures: [...this.state.pictures, newPic]
    // })

    // this.setState({
    //   on: !this.state.on
    // })

    // DON'T HAVE TO USE CALLBACK SYNTAX
    // this.setState({
    //   [event.target.name]: event.target.value
    // })

    this.setState((beef) => {
      return {
        counter: beef.counter + 1
      }
    })

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }



  render(){
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increase!</button>
      </div>
    );
  }
}

export default App;
