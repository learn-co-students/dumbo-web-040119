import React, { PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends PureComponent {

    render(){
      return (
        <div className={"App" + (this.props.darkMode ? " dark" : "")}>
          <button onClick={this.props.changeDarkMode} >Dark mode</button>
          <h3>{this.props.text}</h3>
          <input name="text" onChange={(e) => this.props.changeText(e.target.value)} />

          <h4>{this.props.likes} likes</h4>
          <button onClick={this.props.addLikes}>Like 🤙</button>
          <button onClick={this.props.removeLikes}>Dislike 👎</button>
        </div>
      );
    }
    
}



function mapStateToProps(state){
  return {
    likes: state.likes,
    text: state.text,
    darkMode: state.darkMode
  }
}

function mapDispatchToProps(dispatch){
  return {
    addLikes: () => {
      dispatch({type: "ADD_LIKE"})
    },
    removeLikes: () => {
      dispatch({type: "REMOVE_LIKE"})
    },
    changeText: (text) => {
      dispatch({type: "CHANGE_TEXT", payload: text})
    },
    changeDarkMode: () => {
      dispatch({type: "TOGGLE_DARK"})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
