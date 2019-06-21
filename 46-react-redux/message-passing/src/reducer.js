const defaultState = {
  likes: 0,
  text: "",
  darkMode: false
}

function reducer (state = defaultState, action){
  switch(action.type){
    case "ADD_LIKE":
      return {...state, likes: state.likes + 1}
    case "REMOVE_LIKE":
      return {...state, likes: state.likes - 1}
    case "CHANGE_TEXT":
      return {...state, text: action.payload}
    case "TOGGLE_DARK":
      return {...state, darkMode: !state.darkMode}
    default: 
      return state
  }
}

export default reducer