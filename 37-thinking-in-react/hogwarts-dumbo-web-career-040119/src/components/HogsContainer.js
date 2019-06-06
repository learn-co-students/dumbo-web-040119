import React, { Component } from 'react';
import HogCard from './HogCard'


class HogsContainer extends Component {
  render() {

    return (
      <div className="ui grid container">
        {
          this.props.hogs.map(hog => {
            return <HogCard key={hog.name} name={hog.name}/>
          })
        }
      </div>
    )
  }
}

export default HogsContainer;
