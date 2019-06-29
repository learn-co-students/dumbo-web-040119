import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodItemForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.createFoodItem({
      content: e.target.children[0].value,
      calories: e.target.children[1].value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="content"/>
      <input type="text" placeholder="calories"/>
      <button>Submit</button>
    </form>
    )
  }
}

const reduxActions = dispatch => {
  return {
    createFoodItem: foodItem => dispatch({type: "CREATE_FOOD_ITEM", payload: foodItem})
  }
}

export default connect(null, reduxActions)(FoodItemForm);