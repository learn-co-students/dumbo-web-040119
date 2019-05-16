
function onSubmit(event){
  debugger
  // console.log("sdfhkjsdhjfks")
  const form = document.getElementById("new-movie-form")
  const movieName = form.name.value
  const movieYear = form.year.value
  event.preventDefault();
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify({ title: movieName, year: movieYear })
  })
}


function setupFormSubmit(){
  document.getElementById("new-movie-form").addEventListener("submit", onSubmit)
}


document.addEventListener("DOMContentLoaded", function(){

  // let form = document.getElementById("new-movie-form")
  setupFormSubmit()
})


