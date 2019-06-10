import React from 'react';
import './App.css';
import TickerContainer from "./ticker/TickerContainer"

class App extends React.Component {

  state = {
    display: true
  }

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.toggleDisplay}>Toggle</button>
        {this.state.display ? <TickerContainer /> : null}
      </div>
    );
  }
  
}

export default App;
