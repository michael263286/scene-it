
let watchlist = JSON.parse(localStorage.getItem('watchlist'));


function renderMovies(movies){
  const movieHTMLArray = movies.map(function(currentMovie){
    return ` <div class="card movie col-4 mx-3 my-5 p-0" style="width: 18rem;">
    <img src="${currentMovie.Poster}" class="card-img-top" alt="">
    <div class="card-body">
      <p class="card-text">${currentMovie.Title}</p>
      <p class="card-text">${currentMovie.Year}</p>
      <button class="btn btn-primary remove-button" data-imdbid=${currentMovie.imdbID}>Remove</button>
    </div> 
  </div>`
  })
  const results = document.querySelector('#results');
  results.innerHTML = movieHTMLArray.join("");
  
}
renderMovies(watchlist)
document.addEventListener('click', function(event){

  if(event.target.classList.contains('remove-button')){
    const movieID = event.target.dataset.imdbid
    watchlist=watchlist.filter(movie =>{
      if (movieID == movie.imdbID){
        return false
      }
      else
        return true
    })
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist',watchlistJSON)
    renderMovies(watchlist)
    console.log(watchlist)
  }
})

