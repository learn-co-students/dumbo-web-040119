import React, { Component } from 'react';

class WizardCard extends Component {

  render() {
    return (
      <div>
      <h6>{this.props.name}</h6>
        <p>
          {this.props.house} | {this.props.redux}
        </p>
      </div>
    );
  }
}



export default WizardCard;
