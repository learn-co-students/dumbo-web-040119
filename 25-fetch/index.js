

// console.log("hello from line 3")

// setInterval(function(){
//   console.log("hello from line 6    " + Date.now())
// }, 1000)

// console.log("hello from line 9")

function slapItOnTheDom(data){
  const imageTag = document.createElement("img")
  imageTag.src = data.message
  // console.log(imageTag)
  const liTag = document.createElement("li")
  liTag.appendChild(imageTag)
  const ul = document.querySelector(".js-dogs")
  ul.appendChild(liTag)

  // const ul = document.querySelector(".js-dogs")
  // ul.innerHTML += `
  //   <li>
  //     <img src="${ data.message }" />
  //   </li>
  // `
}

function buttonClicked(){
  // var promise = fetch("https://dog.ceo/api/breeds/image/random")
  // // console.log(thing.response)
  // promise.then(function(response){
  //   return response.json()
  // }).then(function(data){
  //   console.log(data)
  // })
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(slapItOnTheDom)
    // .then(console.log)
    // .then(data => console.log(data))

  // console.log(data)
}


document.addEventListener("DOMContentLoaded", function(){
  // console.log("DOM Content was Loaded")
  var button = document.getElementById("hello-button")
  button.addEventListener("click", buttonClicked)

  // setInterval(buttonClicked, 1000)
})




