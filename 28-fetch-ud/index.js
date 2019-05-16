
function showMovie(id){
  fetch(`http://localhost:3000/movies/${ id }`)
    .then(res => res.json())
    .then(slapMovieOnTheDetail)
}

function slapMovieOnTheDetail(movie){
  detail.querySelectorAll(".title").forEach((element) => element.innerText = movie.title)
  detail.querySelector(".year").innerText = movie.year
}

function onSubmit(event){
  const movieName = newForm.name.value
  const movieYear = newForm.year.value
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

function bindFormSubmit(){
  newForm.addEventListener("submit", onSubmit)
}

function slapMovieOnTheList(movie) {
  const li = document.createElement("li")
  li.innerText = movie.title
  li.addEventListener("click", () => showMovie(movie.id))
  li.className = "movie"
  movieList.appendChild(li)
}

function fillMovieList(){
  fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => data.forEach(slapMovieOnTheList))
}

let movieList = null;
let detail = null;
let newForm = null;
let editForm = null;

document.addEventListener("DOMContentLoaded", function(){
  movieList = document.querySelector(".js-movies")
  detail = document.querySelector(".js-detail")
  newForm = document.querySelector(".js-new-movie-form")
  editForm = document.querySelector(".js-edit-movie-form")

  fillMovieList(movieList)
  bindFormSubmit()
})
