State and Controlled Forms
======================

## SWBATs
- [ ] Draw a component hierarchy and describe the Flow of Information
- [ ] Pass data up and down the component hierarchy with our callbacks
- [ ] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [ ] Write fully controlled forms

## Lecture Notes

### Using State

### Forms

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

## Extras

- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
