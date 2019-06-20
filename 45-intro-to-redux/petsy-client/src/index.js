import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom' 
import { createStore } from 'redux'

const defaultState = {
    selectedCategory: null,
    filter: "",
    categories: [],
    loading: true,
    cart: []
  }

function reducer(state = defaultState, action){
  // console.log("STATE IN REDUCER", state)
  // console.log("ACTION IN REDUCER", action)

  switch(action.type){
    case "TURN_LOADING_OFF":
      return {...state, loading: false}
    case "ADD_CATEGORY":
      return {...state, categories: [...state.categories, action.payload]}
    case "CHANGE_FILTER":
      return {...state, filter: action.payload}
    default:
      return state
  }


}

const store = createStore(reducer)

console.log("READING STATE BEFORE", store.getState())


store.dispatch({type: "CHANGE_FILTER", payload: "hello"})

// const category = {name: "Toys", items: []}
// const category2 = {name: "NOT Toys", items: []}
// store.dispatch({type: "ADD_CATEGORY", payload: category})
// store.dispatch({type: "ADD_CATEGORY", payload: category2})

// store.dispatch({type: "TURN_LOADING_OFF"})


console.log("READING STATE AFTER", store.getState())


ReactDOM.render(
  <Router>
    <App />
  </Router>, 
document.getElementById('root'));
