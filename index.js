function renderMovies(movies){
  const movieHTMLArray = movies.map(function(currentMovie){
    return ` <div class="card movie col-4 mx-3 my-5 p-0" style="width: 18rem;">
    <img src="${currentMovie.Poster}" class="card-img-top" alt=""/>
    <div class="card-body">
      <p class="card-text">${currentMovie.Title}</p>
      <p class="card-text">${currentMovie.Year}</p>
      <a href="#" class="btn btn-primary add-button data-imdbid" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
    </div> 
  </div>`
  })
  const results = document.querySelector('#results');
  results.innerHTML = movieHTMLArray.join("");
  
  
}

document.addEventListener('click', function(event){
  const addButton = document.querySelector('.add-button')
  if(event.target.contains(addButton)){
    const movieID = event.target.dataset.imdbid
  }
})
function saveToWatchlist(movieID){
  console.log(movieID)
  const movie = movieData.find(function(currentMovie){
    return currentMovie.imdbID == movieID;
  })
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);
  if(watchlist == null){
    watchlist = []
  }
  watchlist.push(movie)
  watchlistJSON = JSON.stringify(watchlist)
  localStorage.setItem('watchlist')
  
}



const searchForm = document.querySelector('#search-form')
searchForm.addEventListener('submit',function(e){
  e.preventDefault()
  const searchString = document.querySelector('#searchBar').value
  const urlEncodedSearchString = encodeURIComponent(searchString);
  fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
  .then((res)=> res.json())
  .then(function(data){
    movieData = data.Search
    console.log(data);
    renderMovies(data.Search);
  })
})

