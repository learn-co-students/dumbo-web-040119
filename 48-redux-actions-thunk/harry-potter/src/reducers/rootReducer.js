import { combineReducers } from 'redux'
import wizardsReducer from './wizardsReducer'

export default combineReducers({
  wizards: wizardsReducer
})
