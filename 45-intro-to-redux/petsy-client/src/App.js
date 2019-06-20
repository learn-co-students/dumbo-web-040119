import React, { Fragment } from 'react';
import './App.css';
// import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import Cart from './Cart'
import CategoryContainer from './CategoryContainer'
import ItemCardContainer from './ItemCardContainer'

import { Route, Switch, Redirect } from 'react-router-dom'

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



  // renderView = () => {
  //   switch(this.state.selectedView){
  //     case "home": 
  //       return (
          
  //       )
  //     case "cart":
  //       return <div/>
  //     case "sell":
  //       return <div>I'M A SELL</div>
  //   }
  // }

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
        <Switch>
          <Route path="/cart" render={(routerProps) => {
            return <Cart 
              removeFromCart={this.removeFromCart}
              {...routerProps}
              items={this.state.cart}/>
          }}/>
          <Route path="/home/:category" render={(routerProps) =>{
            const chosenCategory = this.state.categories.find(category => {
              return category.name.toLowerCase() === routerProps.match.params.category.toLowerCase()
            })
            return <Fragment>
              <CategoryContainer 
                categories={this.state.categories} 
              />
              <MainContainer
                filter={this.state.filter} 
                category={chosenCategory}
                addToCart={this.addToCart}
              />
            </Fragment>
          }}/>
          <Route path="/home" render={(routerProps) => {
            let allItems = []

            this.state.categories.forEach(cat => {
              allItems = [...allItems, ...cat.items]
            })
            
            return <Fragment>
              <CategoryContainer 
                categories={this.state.categories} 
              />
              <ItemCardContainer items={allItems}/>
            </Fragment>

          }}/>
        {/*Default route */}
          <Route render={() => <Redirect to="/home"/>}/>
        {/*<Route path="/beefysteak" component={MyComponent}/>*/}
        </Switch>
      </div>
    );
    }
     
  }
}

export default App;
