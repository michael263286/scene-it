
let watchlist = JSON.parse(localStorage.getItem('watchlist'));


function renderMovies(movies){
  const movieHTMLArray = movies.map(function(currentMovie){
    return ` <div class="card movie col-4 mx-3 my-5 p-0" style="width: 18rem;">
    <img src="${currentMovie.Poster}" class="card-img-top" alt=""/>
    <div class="card-body">
      <p class="card-text">${currentMovie.Title}</p>
      <p class="card-text">${currentMovie.Year}</p>
      <a href="#" class="btn btn-primary add-button data-imdbid" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
      <a href="#" class="btn btn-primary remove-button data-imdbid" onclick="saveToWatchlist('${currentMovie.imdbID}')">Remove</a>
    </div> 
  </div>`
  })
  const results = document.querySelector('#results');
  results.innerHTML = movieHTMLArray.join("");
  
  
}
renderMovies(watchlist)