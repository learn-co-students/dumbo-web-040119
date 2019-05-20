
// function removeBlob(element){
//   // event.stopPropagation()
//   // console.log("li was clicked")
//   element.remove()
// }

function wireUpRemoveClick(element) {
  element.addEventListener("click", removeBlob)
}

document.addEventListener("DOMContentLoaded", function(){

  const ul = document.getElementById("items")

  ul.addEventListener("click", function(event){
    // console.log(event.target)
    // if (event.target !== ul) {
    //   console.log("it wasn't the ul")
    // }
    // console.log(event.target.parentNode)
    // debugger
    const li = event.path.find(element => element.classList && element.classList.contains("item"))
    if (li) {
      li.remove()
    }
    // if (event.target.classList.contains("item")) {
    //   event.target.remove()
    // }


    // if (event.target.parentNode === ul) {
    // console.log("ul got clicked")
    // removeBlob(event)
  })

  // ul.addEventListener("click", function(event){
  //   console.log("ul was clicked")
  //   this.style.background = "red"
  // })

  // document.body.addEventListener("click", function(event){
  //   console.log(event.target)
  //   document.body.style.background = "pink"
  //   // console.log("body was clicked")
  // })

  document.getElementById("taco").addEventListener("click", function(){
    // ul.innerHTML = ul.innerHTML + `<li class="item taco">🌮</li>`
    const li = document.createElement("li")
    li.className = "item taco"
    li.innerText = "🌮"
    // wireUpRemoveClick(li)
    ul.appendChild(li)
    // console.log("taco button was clicked")
  })

  // const items = document.querySelectorAll(".item")
  // // console.log(items)
  // items.forEach(function(element){
  //   wireUpRemoveClick(element)
  // })

})