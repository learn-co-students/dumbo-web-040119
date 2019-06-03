Intro to React // JSX & Props
=============================

## SWBATs
- [x] Visualize/Identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [x] Briefly explain Babel's purpose in React
- [x] Explain what a React Component actually is in code
- [x] Use JSX to build custom components and render them in the browser
- [x] See how props are to components as arguments are to functions

- [x] Understand how `create-react-app` works and what it offers a developer
- [x] Organize code into files and use the import-export syntax to pass code between files
- [x] Use props to make components more dynamic and reusable
- [x] Begin to build modular & reusable components
- [x] Setup a new React app and play around with building UIs
- [x] **BONUS** Use the `children` prop 

## Notes
- Etsy for pets - Petsy



### Declarative vs Imperative Programming

Write you intend for the code to do rather than writing every step out.

### Making a burrito:
Get some tortilla
Get some ingredients
Lay tortilla flat
Put carb
Lay do some protein
Add some veggies
Dollop that sour cream
Sauce it up
Wrap that tortilla

### How Chipotle makes burritos
Flour tortilla
Type of rice
Type of protein
Which veggies
Sour cream?
Guac?
Sauces?


```js
// IMPERATIVE
const cardContainer = document.querySelector("#card-container")

// const div = document.createElement("div")
// div.className = "card"

// const header = document.createElement("h1")
// header.textContent = "something"

// const content = document.createElement("p")
// content.textContent = "this is a paragraph"

// div.append(header)
// div.append(content)

cardContainer.innerHTML += `
  <div class="card">
    <h1>something</h1>
    <p>this is a paragraph</p>
  </div>
`

cardContainer.innerHTML += `
  <div class="card">
    <h1>something else </h1>
    <p>this is another paragraph</p>
  </div>
`
```

```js
// DECLARATIVE
function createCard(header, text){
  return `
    <div class="card">
      <h1>${header}</h1>
      <p>${text}</p>
    </div>
  `
}

const cardContainer = document.querySelector("#card-container")

cardContainer += createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
cardContainer += createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
cardContainer += createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
cardContainer += createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
cardContainer += createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
cardContainer += createCard("Hello world", "asuydvaisomdiajshdtfacvduijsaodn")
```

### Slow abstraction to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

### Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist"`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist"`

This is very much analogous to the change over from regular ol' JS functions to JSX components

```jsx
// A regular ol' JS function with arguments <-- THE PAST
function Greeting(phrase, name){
  return <h1>Hello {phrase}! - {name}</h1>
}

// A JSX component using props <-- THE REACT WAY
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
