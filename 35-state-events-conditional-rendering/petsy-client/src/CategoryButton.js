import React from 'react'

class CategoryButton extends React.Component {
  render(){
    return (
      <div className="category-button">
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default CategoryButton