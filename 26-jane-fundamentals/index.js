
// document.addEventListener("DOMContentLoaded", () => {
  let el = document.querySelector('h1')
  console.log("h1 element", el)
// })

var banana;
console.log(banana)
var banana = "banana is a fruit"

// // function declaration ES5
function sum(num1, num2){
  return num1 + num2
}


// // function expression ES5
const sum = function(num1, num2){
  return num1 + num2
}


// // arrow function (ES6) - can only do function expression
const sum = (num1, num2) => {
  return num1 + num2
}

// one line ES6 arrow function with implicit return
const sum = (num1, num) => num1 + num2

// ES6 arrow function
let hello = () => {
  return "Hello World"
}

// one line arrow function
const hello = () => "Hello World"

// console.log(hello())

// console.log(sum(4, 3))


// // map, find, select, each

// Ruby
// // [1,2,3,4,5].select {|num| num > 2}

let array = [1,2,3,4,5]

// we can pass this as a callback to array.filter
function checkValue(element){
  return element > 2
}
// array.filter(checkValue)

// alternatively, we can write an anonymous function to pass to array.filter
let result = array.filter(element => element > 2)

// map
let array2 = [10, 15, 20, 22, 23, 25, 28, 70]
// multiply by 2

let result = array2.map(num => num*2)

// chaining is also okay:
let result = array.filter(element => element > 2).map(num => num*2)

// console.log("result", result)


// let, const, var
// block scope:
// using let/const doesn't leave the block scope
for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}


let arr = [1,2,3,4,5,6]

// using var allows i to leak out of the block
for (var i = 0; i < arr.length; i++){
  console.log(arr[i])
}

console.log("i is: ", i)

// JavaScript scope chain
// to resolve a variable, JS will check its most local function scope, then move up the scope chain
let plum = "plum"

function fruitScope(){
  let plum = "orange"
  return function(){
    let plum = "apple"
    // console.log("plum", plum)
    return function(){
      // let plum = "pineapple"
      console.log(plum)
    }
  }

}

console.log(fruitScope()()())


// falsy values
// 0
// false
// undefined
// null
// NaN
// ""

// PBR, PBV
// let number = 5
// number2 = 6
// number3 = number
// number = 10
// console.log(number3)
// let num = 5
// let num2 = num

// be careful copying arrays and objects as they will pass by reference
let students = ["Jamil", "Frankie", "Ernie", "Yoonmi"]
let studentObj = {
  name: "Jamil",
  food: "pizza",
  ferociousness: 10,
  animals: ["Puppies", "Stallions"]
}

let studentCopy = {...studentObj, animals: ...studentsObj.animals}
// let studentCopy = Object.assign({}, studentObj)

let copy = [...students]

students.push("Jane")
// studentObj.mod = 3

