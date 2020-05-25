import '../component/movie-list.js';
import '../component/person-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const personListElement = document.querySelector("person-list");

    const onButtonSearchClicked = () => {
        if (searchElement.searchType == "movie"){
            console.log("movie");
            DataSource.searchMovie(searchElement.value, `https://api.themoviedb.org/3/search/movie?api_key=d9b760a6b706f7f2bedaa4820ae332c2&query=${searchElement.value}`)
                .then(renderResult)
                .catch(fallbackResult)
        } else if(searchElement.searchType == "tv-show"){
            console.log("tv-show");
            DataSource.searchMovie(searchElement.value, `https://api.themoviedb.org/3/search/tv?api_key=d9b760a6b706f7f2bedaa4820ae332c2&query=${searchElement.value}`)
                .then(renderResult)
                .catch(fallbackResult)
        } else if(searchElement.searchType == "person"){
            console.log("person");
            DataSource.searchMovie(searchElement.value, `https://api.themoviedb.org/3/search/person?api_key=d9b760a6b706f7f2bedaa4820ae332c2&query=${searchElement.value}`)
                .then(renderResult)
                .catch(fallbackResult)
        }
    };

    const renderResult = (results) => {
        if (searchElement.searchType == "person"){
            personListElement.persons = results; 
            movieListElement.clearItem();
        } else{
            movieListElement.movies = results;
            personListElement.clearItem();
        }
    };

    const fallbackResult = (message) => {
        console.log(message)
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const dropdownMenu = document.querySelector("#dropdownMenu4");
    const movieName = document.querySelector("#movie-name");
    const tvshowName = document.querySelector("#TVShow-name");
    const personName = document.querySelector("#person-name");

    /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
    dropdownMenu.addEventListener("click", function(){
        document.getElementById("myDropdown").classList.toggle("show");
    });

    movieName.addEventListener("click", function(){
        dropdownMenu.innerHTML = "Movie";
        searchElement.placeholder = "Search Movie";
        searchElement.searchType = "movie";
    });
    tvshowName.addEventListener("click", function(){
        dropdownMenu.innerHTML = "TV Show";
        searchElement.placeholder = "Search TV Show";
        searchElement.searchType = "tv-show";
    });
    personName.addEventListener("click", function(){
        dropdownMenu.innerHTML = "Person";
        searchElement.placeholder = "Search Person";
        searchElement.searchType = "person";
    });
}

export default main;