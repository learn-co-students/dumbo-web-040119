import * as wizardActionTypes from '../actionTypes/wizards';

// export function loadedWizards(wizards) {
//   return {
//     type: wizardActionTypes["LOADED_WIZARDS"],
//     payload: wizards
//   }
// }

export function loadedWizardsAsync(wizards) {
  return function(dispatch) {
    dispatch({ type: wizardActionTypes["LOADING_WIZARDS"] })
    fetch('http://localhost:3001/wizards')
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: wizardActionTypes["LOADED_WIZARDS"],
          payload: data
        })
      })
  }
}


export function addWizard(newWizard) {
  return {
    type: wizardActionTypes["ADD_WIZARD"],
    payload: newWizard
  }
}

// export function loadingWizards() {
//   return {
//     type: wizardActionTypes["LOADING_WIZARDS"]
//   }
// }
