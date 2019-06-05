State and Controlled Forms
======================

## SWBATs
- [x] Draw a component hierarchy and describe the Flow of Information
- [x] Pass data up and down the component hierarchy with our callbacks
- [x] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [x] Write fully controlled forms

## Lecture Notes

### Controlled Forms

In React, rather than finding individual input elements using `querySelector` or `getElementBy...`, we use `state` to monitor the user's input as they type.

The all-purpose `handleChange`. Just remember to add `name` attributes to your inputs!
```js
handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
```

Doing this creates a 1-way connection wherein user input changes `state`. This is called an *uncontrolled form*. To make it a 2-way street wherein `state` can change the user's input, we add a `value` attribute to our inputs.

```jsx
<input 
  value={this.state.beef} 
  name="beef" 
  onChange={this.handleChange}
/>
```

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

## Extras

- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
