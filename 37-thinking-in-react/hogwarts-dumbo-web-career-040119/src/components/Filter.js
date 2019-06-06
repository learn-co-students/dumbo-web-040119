import React, { Component } from 'react';

class Filter extends Component {

  handleChange = (event) => {
    this.props.toggleFilter(event.target.checked)
  }

  render() {
    return (
      <div>
        <label>Greased?</label>
        <input onChange={this.handleChange} type="checkbox"/>
      </div>
    )
  }
}

export default Filter;
