import React from 'react'
import ItemCardContainer from './ItemCardContainer'

class MainContainer extends React.Component {
  render(){

    const filteredItems = this.props.category.items.filter(item => {
      return item.name.toLowerCase().includes(this.props.filter.toLowerCase())
    })

    return (
      <div>
        <ItemCardContainer cartMode={false} items={filteredItems} action={this.props.addToCart} />
      </div>
    )
  }
}

export default MainContainer