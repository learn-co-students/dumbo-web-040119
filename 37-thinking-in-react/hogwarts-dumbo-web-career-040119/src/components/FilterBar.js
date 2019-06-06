import React, { Component } from 'react';
import Sort from './Sort'
import Filter from './Filter'


class FilterBar extends Component {
  render() {
    return (
      <div style={{height: "5vw"}}>
        <Sort handleChange={this.props.handleChange}/>
        <Filter toggleFilter={this.props.toggleFilter} />
      </div>
    )
  }
}

export default FilterBar;
