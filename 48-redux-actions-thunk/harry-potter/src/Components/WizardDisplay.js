import React from 'react'
import { connect } from 'react-redux'

import WizardCard from './WizardCard'
// import { loadedWizards, loadingWizards } from '../actionCreators/wizards';
import { loadedWizardsAsync } from '../actionCreators/wizards';


class WizardDisplay extends React.Component{
  componentDidMount(){
    this.props.loadedWizardsAsync()
  }

  render(){
    const wizardCards = this.props.wizards.map(wizard => {
      return <WizardCard key={wizard.name} {...wizard} />
    })

    if (this.props.wizardsAreLoading) {
      return "Loading!"
    }

    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {wizardCards}
        </ul>
      </div>
    )
  }
}

const read = (state) => {
  return {
    wizards: state.wizards.items,
    wizardsAreLoading: state.wizards.loading
  }
}

// const update = (dispatch) => {
//   return {
//     loadedWizards: function(wizards) {
//       dispatch(loadedWizards(wizards))
//     }
//   }
// }

// export default connect(read, { loadedWizards, loadingWizards })(WizardDisplay)
export default connect(read, { loadedWizardsAsync })(WizardDisplay)

// CURRYING in JavaScript
// function connect(mstp, mdtp) {
//    for every key in mstp
//   return function(component) {
//     return <newCopyOfComponent {...mstp(state)}/>
//   }
// }
