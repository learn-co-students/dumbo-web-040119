import React from 'react';
import './App.css';
import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import CategoryContainer from './CategoryContainer'

class App extends React.Component {

  // constructor(props){
  //   super()

  //   this.state = {
  //     selectedCategory: categories[0]
  //   }

  //   this.changeCategory = this.changeCategory.bind(this)
  // }

  state = {
    selectedCategory: categories[0]
  }

  // this is an arrow function. why? to come later....
  changeCategory = (category) => {
    // this.setState()
    // console.log("clicked", name)
    // const foundCat = categories.find(category => category.name === name)

    // Mutating state => DO NOT do this!!!
    // this.state.selectedCategory = foundCat

    // 1. setState changes the values in state
    // 2. triggers rerender
    this.setState({
      selectedCategory: category
    })
  }

  render(){
     return (
      <div>
        <Navbar />
        <CategoryContainer categories={categories} changeCategory={this.changeCategory} />
        <MainContainer category={this.state.selectedCategory} />
      </div>
    );
  }
}

export default App;
