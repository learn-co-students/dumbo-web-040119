import React from 'react';
import './App.css';
import FoodItemContainer from './FoodItemContainer'

function App() {
  return (
    <div>
      <header>
        <h1>CaloLog</h1>
        <i>Keep yourself accountable! What did you eat today?</i>
      </header>

      <FoodItemContainer />
    </div>
  )
}

export default App;
