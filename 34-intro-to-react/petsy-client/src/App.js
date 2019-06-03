import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"

// function App() {
//   return (
//     <div>
//       I am a functional component
//     </div>
//   );
// }

const data = [
  {greeting: "Howdy", name: "John Wayne", fontColor: "red", bordered: true},
  {greeting: "Howdy", name: "John Wayne", fontColor: "red", bordered: true},
  {greeting: "Howdy", name: "John Wayne", fontColor: "red", bordered: true},
  {greeting: "Howdy", name: "John Wayne", fontColor: "red", bordered: true},
  {greeting: "Howdy", name: "John Wayne", fontColor: "red", bordered: true},
  {greeting: "Sup Fam", name: "Lil' John", fontColor: "teal", bordered: true}
]

class App extends React.Component {
  createHeaders(){
    return data.map((details, index) => {
      if (index % 2 === 0) {
          return <Header key={index} greeting={details.greeting} name={details.name} color={details.fontColor} bordered={details.bordered}>
            <strong>Hello!!!!!</strong>
          </Header>
      } else {
        return <Header key={index} greeting={details.greeting} name={details.name} color={details.fontColor} bordered={details.bordered}>
          <h1>Goodbe!!!!!</h1>
        </Header>
      }
  })
      
  }
  render(){
    return (
      <div>
        {this.createHeaders()}
      </div>
    )
  }
}

// default export
export default App;
// const beef = "Beefy McSteaker"
// // named export
// export { beef }







