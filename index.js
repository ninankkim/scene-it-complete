function saveToWatchList(imdbID) {
    // saveToWatch = []
    let movie = moviesArray.find((currentMovie)=>{
        return currentMovie.imdbID === imdbID
    }) 
    console.log(movie)

    let watchListJSON = localStorage.getItem("movies")
    let watchList = JSON.parse(watchListJSON)
        if (watchList === null){
            watchList = []
        } 
        watchList.push(movie)
        watchListJSON = JSON.stringify(watchList)
        localStorage.setItem("movies", watchListJSON)
    

}
    // document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function(currentMovie) {
        return `<div class="card">
                    <img src="${currentMovie.Poster} class="card-img-top" alt="movieposter">
                    <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">${currentMovie.Year}</p>
                    <a href="#" onclick="saveToWatchList('${currentMovie.imdbID}')"  class="btn btn-primary">Add</a>
                    </div>
                </div>`
    });
        return movieHtmlArray.join('');
        }
        const movieContainer = document.querySelector('.movies-container')
        // code here will execute after the document is loaded
    // });
    const myForm = document.getElementById('search-form');
    myForm.addEventListener('submit', function(e){
        const searchString = document.querySelector('.search-bar').value
        const urlEncodedSearchString = encodeURIComponent(searchString);


        e.preventDefault()
        axios.get(`http://www.omdbapi.com/?apikey=b43843a0&s=${urlEncodedSearchString}`) 
        .then((response)=>{
            movieContainer.innerHTML = renderMovies(response.data.Search)
            moviesArray = response.data.Search;
            console.log(response.data)

        })



        // movieDataString.inHTML = renderMovies(movieData);
        // event listener code goes here
    })

