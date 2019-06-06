import React, { Component } from 'react';

class HogCard extends Component {
  render() {
    const slug = this.props.name.replace(/\s/g, "_").toLowerCase()
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={`./hog-imgs/${slug}.jpg`}/>
      </div>
    )
  }
}

export default HogCard;
