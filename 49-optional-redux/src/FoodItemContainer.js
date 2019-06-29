import React, { Component } from 'react';
import { connect } from 'react-redux';
import  FoodItemForm from './FoodItemForm';


class FoodItemContainer extends Component {

  render () {
    console.log(this.props, 'props from my connected component')
    return (
      <div className="food-items-container">
        <ul>
          {
            this.props.foodItems.map(foodItem => (
              <li>{foodItem.content}- <span>{foodItem.calories}</span></li>
            ))
          }
        </ul>
        <hr/>
        <FoodItemForm />
      </div>
    )
  }
}

// connect is a higher order function
// higher order function == function that returns a function

// the returned function expects an component as the argument
// the returned function will then return a connected version of our component

// connect takes in two arguments, functions
// one will read state, the other will tell us how we can talk to the store


const reduxState = state => {
  return {
    foodItems: state.foodItems
  }
}
export default connect(reduxState, null)(FoodItemContainer);