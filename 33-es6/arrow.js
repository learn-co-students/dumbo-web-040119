

// const callbackOne = res => { 
//   console.log(res)
//   const promise = res.json(); 
//   console.log(promise)
//   return promise
// }


// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(res => res.json())
//   .then(data => updateLikes())
//   .then(updateLikes)
  // .then(updateLikes()) // no
  // .then(function(res) { return res.text() })
  // .then(callbackOne)



// # Arrow functions: Key Questions
// - Review: then
// - Do we have to use arrow functions for .then with fetch?
// - Review: this
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?
// - Under what circumstances will an arrow function implicitly return?
// - Can I define a default parameter for a JS function?




// https://twitter.com/dan_abramov/status/790858537513656320

var speak = function(){
  console.log(this)
  return this.says + "!"
}



const cat = {
  name: "Fluffy",
  says: "Meow",
  speak: speak
}

// debugger

console.log(cat.speak)
console.log(speak)

console.log(cat.speak === speak)

console.log(this)

const dog = {
  name: "Rover",
  says: "Woof",
  speak: cat.speak
}

console.log(cat.speak())
console.log(dog.speak())
console.log(dog === cat)
console.log(dog.speak === cat.speak)

const speak = 

const human = {
  name: "Dan Abramov",
  says: "In JavaScript, the value of this is determined by the execution context unless you use an arrow function",
  speak: () => {
    console.log(this)
    return this.says + "!"
  } 
}

console.log(human.speak())

// What are some key differences / gotchas 
// surrounding arrow functions?
// How do arrow functions treat `this` 
// differently than traditional functions?

/*
class Lightswitch {

  constructor(args) {
    this.button = document.createElement("button");
    this.button.innerText = args.colorName;
    this.colorHex = args.colorHex;

    const body = document.querySelector("body")
    body.appendChild(this.button)

    function eventListener() {
      console.log(this)
      document.body.style.backgroundColor = this.colorHex;
    }

    console.log(this)
    this.button.addEventListener("click", eventListener)
  }

}

document.addEventListener("DOMContentLoaded", () => {
  new Lightswitch({ colorHex: "#00f", colorName: "Blue" });
  new Lightswitch({ colorHex: "#fa0", colorName: "Orange" });
  new Lightswitch({ colorHex: "#0f0", colorName: "Green" });
})

*/



// When do I need { } curly braces with an arrow function? 
// When can I skip them?


// Under what circumstances will an arrow function implicitly return?

  // const spiceGirls = ["Scary", "Baby", "Ginger", "Posh", "Sporty"]

  // // const callback = function(adjective) { adjective.toUpperCase() + " SPICE" }
  // // const callback = adjective => { adjective.toUpperCase() + " SPICE" }
  // // const callback = (adjective) => { adjective.toUpperCase() + " SPICE" }
  // const callback = (adjective) => { adjective.toUpperCase() + " SPICE" }
  // // const callback = (adjective) => adjective.toUpperCase() + " SPICE"
  // // const callback = adjective =>  adjective.toUpperCase() + " SPICE"
  
  // const bigNastyString = spiceGirls.map(callback).join(" and ")

  // console.log(bigNastyString);

// can I define a default parameter for a JS function?

// function greet(name = "Ginger Spice") {
//   return `Hello, ${ name }`
// }
// const greet = (name = "Ginger Spice") => `Hello, ${ name }`
// const greet = name = "Ginger Spice" => `Hello, ${ name }`

// console.log(greet("Graham"))
// console.log(greet(null))
// console.log(greet(false))
// console.log(greet(0))
// console.log(greet(NaN))
// console.log(greet(""))
// console.log(greet(undefined))















