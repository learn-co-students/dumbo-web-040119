# Redux Forms

## Things to cover
* rootReducer
* Action Creators

## Questions
* When you're connecting a component to Redux, and you're using mstp and mdtp do you need to import connect and write connect()() in every file? YES
* Do the names mapStateToProps and mapDispatchToProps matter? NO
* What are action creators? We'll see...

## Redux?

1. Store
  * Import { createStore } from 'redux'
  * createStore(reducer)
2. Reducer
  * Takes in a state (or default state) and an action
  * Action: object with type property (may have a payload)
  * Always returns a new state
  * Reducers have switch inside
    * Instead of if/else
3. Re-render
4. Dispatch (updating to the store)
  * Just a method that we're calling...
    * Just takes the action

## Root reducer

Conventional root reducer

```js
// ./oldRootReducer.js
const defaultState = {
  loadingUsers: false,
  users: [],

  loadingChannels: false,
  channels: [],
  newChannelName: '',

  loadingMessages: false,
  messages: [],
  messageDraft: {}
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "START_LOADING_USERS":
      const newState = {...state}
      newState.loadingUsers = true
      return newState

    case "LOADED_USERS":
      const newState = {...state}
      newState.loadingUsers = false
      newState.users = action.users
      return newState

    case "START_LOADING_MESSAGES":
      const newState = {...state}
      newState.loadingMessages = true
      return newState

    case "START_LOADING_CHANNELS":
      const newState = {...state}
      newState.loadingChannels = true
      return newState

    default:
      return state
  }
}

export default reducer
```

### Using `combineReducers`

```js
// ./reducers/usersReducer.js
const defaultState = {
  loading: false,
  users: []
}

function usersReducer(state = defaultState, action) {
  switch (expression) {
    case "LOADING_USERS":
      const newState = {...state}
      newState.loadingUsers = true
      return newState

    case "LOADED_USERS":
      const newState = {...state}
      newState.loadingUsers = false
      newState.users = action.users
      return newState

    default:
      return state
  }
}

export default usersReducer
```

```js
// ./reducers/usersReducer.js
const defaultState = {
  loading: false,
  messages: [],
  messageDraft: {}
}

function messagesReducer(state = defaultState, action) {
  switch (expression) {
    case "LOADING_MESSAGES":
      const newState = {...state}
      newState.loadingMessages = true
      return newState

    default:
      return state
  }
}

export default messagesReducer
```

```js
// ./reducers/rootReducer.js
import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import messagesReducer from './messagesReducer'

export default combineReducers({
  users: usersReducer,
  messages: messagesReducer
})

/**
THIS IS AN EXAMPLE
state = {
  users: {
    loading: false,
    users: []
  },
  messages: {
    loading: false,
    messages: [],
    messageDraft: {}
  }
}

*/

```

```js
// index.js
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

// ...

const store = createStore(rootReducer)

store.dispatch({
  type: "LOADING"
})

// ...

```

### Action creators and types

```js
// ./index.js
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { loadingMessages } from './actions/messageActions'

// ...

const store = createStore(rootReducer)

// store.dispatch({
//   type: "LOADING_MESSAGES"
// })

// const messagesAction = loadingMessages()
store.dispatch(loadingMessages())

// ...

```

```js
// ./actions/messageActions.js
export function loadingMessages() {
  return {
    type: "LOADING_MESSAGES"
  }
}

export function loadedMessages(messages) {
  return {
    type: "LOADED_MESSAGES",
    payload: messages
  }
}

/**
  fetch()
    .then(resp => resp.json())
    .then(this.props.loadedMessages)
*/

```

#### Action types

```js
// ./actionTypes/messageActionTypes.js
export const LOADING_MESSAGES = "LOADING_MESSAGES"
export const LOADING_MESSAGES_1 = "LOADING_MESSAGES"
export const LOADING_MESSAGES_2 = "LOADING_MESSAGES"
export const LOADING_MESSAGES_3 = "LOADING_MESSAGES"
export const LOADING_MESSAGES_4 = "LOADING_MESSAGES"
export const LOADING_MESSAGES_5 = "LOADING_MESSAGES"
export const LOADING_MESSAGES_6 = "LOADING_MESSAGES"
export const LOADING_MESSAGES_7 = "LOADING_MESSAGES"
```

```js
// ./actions/messageActions.js
import { LOADING_MESSAGES } from '../actionTypes/messageActionTypes.js'
export function loadingMessages() {
  return {
    type: LOADING_MESSAGES
  }
}

// ...
```

```js
// ./reducers/usersReducer.js
import * as messageActionTypes from '../actionTypes/messageActionTypes.js'

const defaultState = {
  loading: false,
  messages: [],
  messageDraft: {}
}

function messagesReducer(state = defaultState, action) {
  switch (expression) {
    case messageActionTypes.LOADING_MESSAGES:
      const newState = {...state}
      newState.loadingMessages = true
      return newState

    default:
      return state
  }
}

export default messagesReducer
```
