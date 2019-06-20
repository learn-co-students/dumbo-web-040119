import React from 'react'
import ItemCardContainer from './ItemCardContainer'


// make a cart card

class Cart extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div className="cart">
        <h1>Your cart: </h1>
        <ItemCardContainer cartMode={true} action={this.props.removeFromCart} items={this.props.items}/>
      </div>
    )
  }
}

export default Cart