import React from 'react'

class CategoryButton extends React.Component {
  handleClick = (event) => {
    this.props.changeCategory(this.props.category)
  }

  render(){
    return (
      <div onClick={this.handleClick} className="category-button">
        <h3>{this.props.category.name}</h3>
      </div>
    )
  }
}

export default CategoryButton