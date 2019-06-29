## Setting up Redux
Uses a pub/sub pattern. Components can subscribe to get state (memory) updates from the store.

### Step - 1: We need a store:
Store is where we keep our state (memory). If we want to get the state, we get it from the store. If we want to update the state, we send messages to the store.
```javascript
const store = createStore()
```
To create the store, we need a reducer. The reducer is a giant if/else function that dictates how our store can update the state of our app.


The reducer should accept two arguments. The current state, and an action(object).
```javascript
const reducer = (state, action) => {
  // ...
  return state
}
```
### Step - 2: Provide the store to our app:
Great, we have a store how can we use it in our redux app? Thanks to a npm package called `react-redux`, we have an easy way to set that up.

```javascript
import { Provider } from 'react-redux';
<Provider store={store}>
  <App />
</Provider>
```

### Step - 3 (and beyond) Connect our components to Redux:
Redux isn't all - or - nothing. Your components don't have to be connected to the store if you don't need it to be. But how can we do that if we do need it?


How does connect work? It expects two arguments and *returns a function.* This function will take in our component, and return a connected (to the store) version of the component.
```javascript
import { connect } from 'react-redux'

export default connect(null, null)(OurComponent);
```

### Map State to Props:
The first argument in `connect` is a function that will allow us to specify which piece of state (from our store) we want to make available to our connected component.
```javascript
const mapDispatchToProps = state => {
  // what ever key-values in the object returned by this function will show up as props in our connected component.
  // the argument state is provided by connect. This state is our entire state-tree from the store.
  return {
    poop: "This is probably not going to be very helpful to our component",
    currentUser: state.currentUser // maybe our component needs to know who the current user is. This will make that possible.
  }
}
```

### Map Dispatch to Props:
You may have seen lots of patterns such as action creators, etc for managing possible state changes. BUT, as long as you understand that the only way we can update our state (in the store), is by dispatch an action object, then you're good to go.


All of these other patterns such as action creators and action types are just techniques/patterns that allows us to organize our code for dispatching actions.
