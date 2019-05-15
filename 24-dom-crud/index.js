/*

listeningElement.addEventListener("type", function(){
  // do some stuff to the dom
})




*/
const addMoje = document.getElementById("hello-button")
// const addMoje = document.querySelector("body #hello-button")

const ul = document.getElementById("blobs")

function changeToCoconut(event){
  // console.log(event.target)
  event.target.innerText = "🥥"
}

function nuke(event){
  event.preventDefault()
  event.target.remove()
}

addMoje.addEventListener("click", function(event){
  // event.target.innerText = "🌮"
  // ul.innerHTML = ul.innerHTML + "<li>🌮</li>"
  // newLi = 
  let newLi = document.createElement("li");
  newLi.innerHTML += "🌮"
  ul.appendChild(newLi);

  newLi.addEventListener("click", changeToCoconut)
  newLi.addEventListener("contextmenu", nuke)

})

// ul.addEventListener("click", function(event){
//   // console.log(event.target)
//   event.target.innerText = "🥥"
// })


// const allTheLis = document.querySelectorAll("#blobs li")

// console.log(allTheLis)


