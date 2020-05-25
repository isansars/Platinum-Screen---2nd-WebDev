import './movie-item.js';

class MovieList extends HTMLElement{
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
    }

    set movies(movies){
        this._movies = movies;
        this.render();
    }

    clearItem(){
        this._shadowDOM.innerHTML = "";
    }

    renderError(message){
        this._shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this._shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }

    render(){
        this._shadowDOM.innerHTML = "";
        this._movies.forEach(movie =>{
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this._shadowDOM.appendChild(movieItemElement);
        })
    }
}

customElements.define("movie-list", MovieList);