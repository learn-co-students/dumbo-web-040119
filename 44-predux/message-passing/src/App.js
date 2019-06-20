import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false
  }

  router = (type, payload) => {
    let newState;

    switch(type) {
      case "DISLIKE":
        // decrease the likes
        newState = {...this.state, likes: this.state.likes - 1}
        break;
      case "LIKE":
        // increase the likes
        newState = {...this.state, likes: this.state.likes + 1}
        break;
      case "INPUT":
        // change the user's input
        newState = {...this.state, text: payload}
        break;
      case "DARK_MODE":
        newState = {...this.state, darkMode: !this.state.darkMode}
        break;
      default:
        // do nothing
        newState = {...this.state}
    }

    this.setState(newState)

  }

  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.router("DARK_MODE")}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input name="text" value={this.state.text} onChange={(e) => this.router("INPUT", e.target.value)}/>

        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.router("LIKE")}>Like 👍</button>
        <button onClick={() => this.router("DISLIKE")}>Dislike 👎</button>
      </div>
    );
  }
}

export default App;
