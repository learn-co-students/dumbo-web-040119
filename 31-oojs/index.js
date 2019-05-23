
class Person {

  breathe(){
    console.log("wheeee lungs")
  }

}


class Instructor extends Person {

  constructor(preferredName, fullName = "Potaot"){
    super()
    this.preferredName = preferredName
    this.fullName = fullName || "Potato"
  }

  introduce() {
    return "Hi it's me!"
  }

  static superFakeMethod() {
    return 5
  }

}

let graham = new Instructor("Graham", "Graham Aden Troyer-Joy")
let leizl = new Instructor("Leizl", "Leizl Samano")
let ryan = new Instructor("Ryan", "Ryan Ghaida")

let ari = new Person("Ariana", "A. Grande")


console.log(graham.introduce())
console.log(Instructor.superFakeMethod())

console.log(graham)

// function introduce(){
//   return `Hi, it's ${ this.preferredName }!`
// }

// const ryan = {
//   fullName: "Ryan Ghaida",
//   prefName: "Ryan",
//   introduce: introduce
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   preferredName: "Graham",
//   introduce: introduce
// }

// const leizl = {
//   legalName: "Leizl Samano",
//   preferredName: "Leizl",
//   introduce: introduce
// }


// // graham["introduce"]

// console.log(ryan.introduce())
// console.log(graham.introduce())
// console.log(leizl.introduce())

// console.log(ryan.introduce === graham.introduce)
// console.log(ryan.introduce() === graham.introduce())





// foo = { 
//   bar: 6, 
//   blat: { 
//     banana: "🍌",
//     help: function(){
//       return "Banana sandwich"
//     }
//   },
//   banana: [1,2,3,4,5]
// }

// console.log(foo.help)
// console.log(foo.help())

