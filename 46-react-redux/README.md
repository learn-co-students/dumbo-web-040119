Intro to Redux
==============

## SWBATs

### Redux
- [x] Install the redux library so it can be used in a project.
- [x] Create a `store` in redux with some default `state`.
- [x] Create a `reducer` to change `state` based on an `action`.
- [x] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [x] Read `state` in the `store`.
- [x] Make a connection b/w Redux and one other concept learned in Mods 1-4 (message passing).

### React Redux
- [ ] Install the `react-redux` library so it can be used in a project.
- [ ] Make the `store` available to their application by using the `Provider` component.
- [ ] Use `connect` to give components the ability to listen for changes to the `store`.
- [ ] Use `dispatch` in a React component.
- [ ] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [ ] Rethinking in React with Redux

## Lecture Notes

Redux **will** test your JavaScript knowledge to the **MAX**!!!

Things that we like about React:
- Component structure
- Parent-child relationship between components
- Easy to use state to make DOM dynamic
- Lots of compatible libraries
- When well connected, you can trust that state changes will affect the page

Things that we **do not** like about React:
- Too many rules
- Passing props ****
- Components passing info to each other ****
- Annoying to think about where state should live ****
- Having state in multiple places in app ****
- Using the React Dev tools (annoying to find stuff deeply nested)
- `this`


### React Recap


### From lecture

```js
```


### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)


### Vocabulary
- [x] Redux - Global state management system
- [x] state - An object. Used as our source of data
- [x] store - Used to manage state. Contains both the state itself as an object and functions that manipulate/read state
- [x] reducer - Used to control changes to state. Whatever is returned from the reducer BECOMES state
- [x] getState() - Function used to READ from state
- [x] dispatch() - Function used to write to the state. Takes as an argument an object called an "action". Calling dispatch tells Redux to call your reducer
- [x] action - An object that is taken as an argument to `dispatch` and is eventually passed into the reducer. Must have AT LEAST one property called "type"
- [x] plain object - 'Nuff said. `state` and actions are Plain ol' JS Objects (POJOs)
- [x] type - A string used to determine HOW state should change. Used in coordination with a switch statement in the reducer. Part of the action
- [x] payload - The data that is being passed into the reducer. Whereas the type determines HOW to change state, the payload determines WITH WHAT state should change. Part of the action
- [x] mutate - The thing we don't want to do. We will frequently **copy** arrays and objects to prevent mutation



- [X] ALL_THE_CAPS - A standard for writing action types. 
- [ ] Pure Functions
- [ ] Single Source of Truth
- [ ] Unidirectional Flow
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] Provider
- [ ] connect()
