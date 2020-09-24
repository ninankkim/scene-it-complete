// document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        const movieHtmlArray = movieArray.map(function(currentMovie) {
            return `<div class="card">
                        <img src="${currentMovie.Poster} class="card-img-top" alt="movieposter">
                        <div class="card-body">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <p class="card-text">${currentMovie.Year}</p>
                        </div>
                    </div>`
        });
        return movieHtmlArray.join('');
    }

const movieContainer = document.querySelector('.movies-container')
movieContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem('movies')));
