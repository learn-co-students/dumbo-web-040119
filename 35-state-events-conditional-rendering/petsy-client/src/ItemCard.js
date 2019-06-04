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
      </div>
    )
  }
}

export default ItemCard