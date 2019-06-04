import React from 'react'
import CategoryButton from './CategoryButton'

class CategoryContainer extends React.Component {
  render(){
    return (
      <div className="category-bar">
        {
          this.props.categories.map(category => {
            return <CategoryButton key={category.id} name={category.name} />
          })
        }
      </div>
    )
  }
}

export default CategoryContainer