import React, { Fragment } from 'react';
import './App.css';
// import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import CategoryContainer from './CategoryContainer'

class App extends React.Component {
  state = {
    selectedCategory: null,
    openCart: false,
    filter: "",
    categories: [],
    loading: true,
  }

  fetchData = () => {
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data => {
      this.setState({
        categories: data,
        selectedCategory: data[0],
        loading: false
      })
    })
  }

  componentDidMount(){
    this.fetchData()
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
    this.setState({
      openCart: !this.state.openCart
    })
  }



  render(){
    if (this.state.loading) {
      return <h1>LOADING</h1>
    } else {
      return (
      <div>
        <Navbar changeFilter={this.changeFilter} openCart={this.openCart} />
        {
          this.state.openCart ? 
            <div>I'M A CART</div>
          :
            <Fragment>
              <CategoryContainer 
                categories={this.state.categories} 
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
}

export default App;
