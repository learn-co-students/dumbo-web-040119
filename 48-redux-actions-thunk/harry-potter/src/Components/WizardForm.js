import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addWizard } from '../actionCreators/wizards';

class WizardForm extends Component {
  state = {
    name: '',
    house: '',
    redux: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addWizard(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}

// const update = (dispatch) => {
//   return {
//     addWizard: function(newWizard) {
//       dispatch(addWizard(newWizard))
//     }
//   }
// }

export default connect(null, { addWizard })(WizardForm);
