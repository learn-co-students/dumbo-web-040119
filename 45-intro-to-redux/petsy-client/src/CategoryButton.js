import React from 'react'
import { withRouter } from 'react-router-dom'

class CategoryButton extends React.Component {
  handleClick = (event) => {
    // this.props.changeCategory(this.props.category)
    this.props.history.push(`/home/${this.props.category.name.toLowerCase()}`)
  }

  render(){
    return (
      <div onClick={this.handleClick} className="category-button">
        <h3>{this.props.category.name}</h3>
      </div>
    )
  }
}

export default withRouter(CategoryButton)