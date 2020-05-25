class PersonItem extends HTMLElement{
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
        this._searchType = "person";
    }

    set person(person){
        this._person = person;
        this.render();
    }

    set searchType(type){
        this._searchType = type;
    }

    render(){
        let movieString = "";
        let i;
        for (i = 0; i<this._person.known_for.length-1; i++){
            movieString += ` ${this._person.known_for[i].original_title},`;
        }
        movieString += ` and ${this._person.known_for[2].original_title}.`;

        this._shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0'
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .poster {
                    object-fit: cover;
                    object-position: center;
                    max-height: 600px;
                }

                .person-info {
                    padding: 24px;
                    text-align: left;
                }
                
                .person-info > h2 {
                    font-weight: lighter;
                }
                
                .person-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }

                @media screen and (max-width: 550px){
                    .poster{
                        width: 100%;
                    }
                }
            </style>
            <img class="poster" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${this._person.profile_path}" alt="poster">
            <div class="person-info">
                <h2>${this._person.name} </h2>
                <p>Popularity: ${this._person.popularity}</p>
                <p>Known for: ${movieString}</p>                
            </div>`;
    }
}

customElements.define("person-item", PersonItem);