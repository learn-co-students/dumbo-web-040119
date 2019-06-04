import React from 'react';
import './App.css';
import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import CategoryContainer from './CategoryContainer'

class App extends React.Component {
  state = {
    selectedCategory: categories[0]
  }

  changeCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  render(){
     return (
      <div>
        <Navbar />
        <CategoryContainer 
          categories={categories} 
          changeCategory={this.changeCategory} 
        />
        <MainContainer 
          category={this.state.selectedCategory}
        />
      </div>
    );
  }
}

export default App;
