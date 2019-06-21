import React, { Fragment } from 'react';
import './App.css';
// import categories from './data'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import Cart from './Cart'
import CategoryContainer from './CategoryContainer'
import ItemCardContainer from './ItemCardContainer'

import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    selectedCategory: null,
    filter: "",
    categories: [],
    loading: true,
    selectedView: "home", //"sell", "discover", "cart"... etc.
  }


  removeFromCart = (itemObj) => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== itemObj.id)
    })
  }

  changeView = (newView) => {
    this.setState({
      selectedView: newView
    })
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

  fetchData = () => {
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data => {
      this.props.setReduxCategories(data)
      
      this.setState({
        selectedCategory: data[0],
        loading: false
      })
    })
  }

  render(){
    console.log("APP PROPS", this.props)
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
              items={this.props.reduxCart}/>
          }}/>
          <Route path="/home/:category" render={(routerProps) =>{
            const chosenCategory = this.props.reduxCategories.find(category => {
              return category.name.toLowerCase() === routerProps.match.params.category.toLowerCase()
            })
            return <Fragment>
              <CategoryContainer 
                categories={this.props.reduxCategories} 
              />
              <MainContainer
                filter={this.state.filter} 
                category={chosenCategory}
                addToCart={this.props.addToReduxCart}
              />
            </Fragment>
          }}/>
          <Route path="/home" render={(routerProps) => {
            let allItems = []

            this.props.reduxCategories.forEach(cat => {
              allItems = [...allItems, ...cat.items]
            })
            
            return <Fragment>
              <CategoryContainer 
                categories={this.props.reduxCategories} 
              />
              <ItemCardContainer items={allItems}/>
            </Fragment>
          }}/>
          <Route render={() => <Redirect to="/home"/>}/>
        </Switch>
      </div>
    );
    }
     
  }
} // end of the component


// this is how a component will gain access to data that is stored within the redux store
function mapStateToProps(state){

  // mapStateToProps must return an object
  // this object will be appended to the props of the component
  return {
    reduxCart: state.cart,
    reduxCategories: state.categories
  }
}

function mapDispatchToProps(dispatch){

  // you will return an object
  // and this object will also be appended to the props of the component
  return {
    addToReduxCart: (itemObj) => {
      dispatch({type: "ADD_TO_CART", payload: itemObj})
    },
    setReduxCategories: (categories) => {
      dispatch({type: "SET_CATEGORIES", payload: categories})
    }

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
















