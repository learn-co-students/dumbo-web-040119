const defaultState = {
    selectedCategory: null,
    filter: "",
    categories: [],
    loading: true,
    cart: [],
  }

function reducer(state = defaultState, action){
  switch(action.type){
    case "SET_CATEGORIES":
      return {...state, categories: action.payload}
    case "ADD_TO_CART":
      return {...state, cart: [...state.cart, action.payload]}
    case "TURN_LOADING_OFF":
      return {...state, loading: false}
    case "ADD_CATEGORY":
      return {...state, categories: [...state.categories, action.payload]}
    case "CHANGE_FILTER":
      return {...state, filter: action.payload}
    default:
      return state
  }
}

export default reducer