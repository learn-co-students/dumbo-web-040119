import React from 'react'
import ItemCard from './ItemCard'

class ItemCardContainer extends React.Component {
  render(){
    return (
      <div className="item-card-container">
        {
          this.props.items.map(item => {
            return <ItemCard key={item.id} item={item}/>
          })
        }
      </div>
    )
  }
}

export default ItemCardContainer