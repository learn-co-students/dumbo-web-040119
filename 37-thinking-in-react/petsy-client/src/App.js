import React, { Fragment } from 'react';
import './App.css';
import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import CategoryContainer from './CategoryContainer'

class App extends React.Component {
  state = {
    selectedCategory: categories[0],
    openCart: false,
    filter: ""
  }

  changeCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  changeFilter = (newFilterValue) => {
    this.setState({
      filter: newFilterValue
    })
  }

  openCart = () => {
    //1. What state should I add to my default state?
    //2. How will this function get passed down where it needs to go?
    //3. What event handler will I use to invoke this function
    //4. How will this function change state?

    // console.log("CART CLICKED")
    this.setState({
      openCart: !this.state.openCart
    })
    // setState is asynchronous, so this will show the PREVIOUS state value
    // console.log(this.state.openCart)
  }

  render(){
     return (
      <div>
        <Navbar changeFilter={this.changeFilter} openCart={this.openCart} />
        {
          this.state.openCart ? 
            <div>I'M A CART</div>
          :
            <Fragment>
              <CategoryContainer 
                categories={categories} 
                changeCategory={this.changeCategory} 
              />
              <MainContainer
                filter={this.state.filter} 
                category={this.state.selectedCategory}
              />
            </Fragment>
        }
      </div>
    );
  }
}

export default App;
