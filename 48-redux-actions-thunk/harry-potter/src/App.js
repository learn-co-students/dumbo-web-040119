import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'
import Header from './Components/Header'
import rootReducer from './reducers/rootReducer'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <WizardForm/>
          <WizardDisplay/>
        </div>
      </Provider>
    );
  }
}

export default App;
