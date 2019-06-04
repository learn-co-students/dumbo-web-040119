import React from 'react';
import './App.css';
import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import CategoryContainer from './CategoryContainer'

class App extends React.Component {

  state = {
    selectedCategory: 0
  }

  render(){
     return (
      <div>
        <Navbar />
        <CategoryContainer categories={categories} />
        <MainContainer category={categories[this.state.selectedCategory]} />
      </div>
    );
  }
}

export default App;
