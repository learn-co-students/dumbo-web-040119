import React, { Component } from 'react';

class Sort extends Component {

  sortChange = (event) => {
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <div>
        <select onChange={this.sortChange}>
          <option value="" >None</option>
          <option value="name" >Name</option>
          <option value="weight" >Weight</option>
        </select>
      </div>
    )
  }
}

export default Sort;
