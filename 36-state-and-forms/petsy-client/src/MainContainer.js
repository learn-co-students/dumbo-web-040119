import React from 'react'
import ItemCardContainer from './ItemCardContainer'

class MainContainer extends React.Component {
  render(){
    return (
      <div>
        <ItemCardContainer items={this.props.category.items} />
      </div>
    )
  }
}

export default MainContainer