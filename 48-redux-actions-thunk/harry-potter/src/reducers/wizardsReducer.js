// import wizards from '../wizards'
import * as wizardActionTypes from '../actionTypes/wizards';

const defaultState = {
  loading: false,
  items: []
}

export default function(state = defaultState, action) {
  const newState = {...state}

  switch (action.type) {
    case wizardActionTypes.LOADING_WIZARDS:
      newState.loading = true

      return newState;
    case wizardActionTypes.LOADED_WIZARDS:
      newState.items = action.payload
      newState.loading = false

      return newState;
    case wizardActionTypes.ADD_WIZARD:
      const newItems = [...state.items]
      newState.items = newItems
      newState.items.push(action.payload)

      // const newState = {
      //   ...state,
      //   items: [...state.items]
      // }
      // newState.items.push(action.payload)
      return newState
    default:
      return state
  }
}
