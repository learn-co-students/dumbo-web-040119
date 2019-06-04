import React from 'react'
import CategoryButton from './CategoryButton'

class CategoryContainer extends React.Component {
  render(){
    return (
      <div className="category-bar">
        {
          this.props.categories.map(category => {
            return <CategoryButton changeCategory={this.props.changeCategory} key={category.id} category={category} />
          })
        }
      </div>
    )
  }
}

export default CategoryContainer