import React from 'react'

class SearchBar extends React.Component {

  state = {
    filterInput: "",
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.changeFilter(this.state.filterInput)

    this.setState({
      filterInput: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){
    console.log(this.state)
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input name="filterInput" value={this.state.filterInput} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// add a click event listener to the form (submit event handler)

export default SearchBar