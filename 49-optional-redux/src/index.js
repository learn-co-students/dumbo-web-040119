import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  foodItems: [
    {
      content: "food item",
      calories: 400
    },
    {
      content: "pizza 🍕",
      calories: 450
    }
  ],

  currentUser: {
    //...
  }
}

// { type: this lets the reducer run throught it's if else conditions }

const reducer = (state = initialState, action) => {
  console.log(action.type)
  console.log(action.type == "CREATE_FOOD_ITEM")
  if (action.type === "CREATE_FOOD_ITEM") {
    return {
      ...state,
      foodItems: [...state.foodItems, action.payload]
    }
  }
  return state
}

const store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  
  document.getElementById('root'));
