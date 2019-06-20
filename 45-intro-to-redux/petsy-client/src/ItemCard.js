import React from 'react'

class ItemCard extends React.Component {
  render(){
    const { image_url, name, description, price } = this.props.item
    return (
      <div className="item-card">
        <div className="image-wrapper" >
         <img className="image" src={image_url} alt={image_url} />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <strong>${price}</strong>
        <button onClick={() => this.props.action(this.props.item)} >{this.props.cartMode ? "Remove from cart" : "Add to cart"}</button>
    
      </div>
    )
  }
}

export default ItemCard