import React, { Fragment } from 'react';
import './App.css';
// import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import Cart from './Cart'
import CategoryContainer from './CategoryContainer'

class App extends React.Component {
  state = {
    selectedCategory: null,
    filter: "",
    categories: [],
    loading: true,
    selectedView: "home", //"sell", "discover", "cart"... etc.
    cart: []
  }

  addToCart = (itemObj) => {
    // copy previous cart
    // add object
    this.setState({
      cart: [itemObj, ...this.state.cart]
    })

    // no no! mutating state!
    // this.state.cart.push(itemObj)
  }

  removeFromCart = (itemObj) => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== itemObj.id)
    })
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

  changeView = (newView) => {
    this.setState({
      selectedView: newView
    })
  }



  renderView = () => {
    switch(this.state.selectedView){
      case "home": 
        return (
          <Fragment>
            <CategoryContainer 
              categories={this.state.categories} 
              changeCategory={this.changeCategory} 
            />
            <MainContainer
              filter={this.state.filter} 
              category={this.state.selectedCategory}
              addToCart={this.addToCart}
            />
          </Fragment>
        )
      case "cart":
        return <Cart removeFromCart={this.removeFromCart} items={this.state.cart}/>
      case "sell":
        return <div>I'M A SELL</div>
    }
  }

  componentDidMount() {
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

  render(){
    if (this.state.loading) {
      return <h1>LOADING</h1>
    } else {
      return (
      <div>
        <Navbar changeFilter={this.changeFilter} changeView={this.changeView} />
        {this.renderView()}
      </div>
    );
    }
     
  }
}

export default App;
