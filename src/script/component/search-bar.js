class SearchBar extends HTMLElement{
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
        this._searchType = "movie";
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    set placeholder(searchPlaceholder){
        this._shadowDOM.querySelector("#searchElement").placeholder = searchPlaceholder;
    }
    set searchType(type){
        this._searchType = type;
    }

    get searchType(){
        return this._searchType;
    }
    get value(){
        return this._shadowDOM.querySelector("#searchElement").value;
    }
    get category(){
        return this._shadowDOM.querySelector("#")
    }

    render(){
        this._shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            font-family: 'Quicksand', sans-serif;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #5E2563;
            font-weight: bold;
            font-family: 'Quicksand', sans-serif;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #5E2563;
            font-family: 'Quicksand', sans-serif;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: #5E2563;
            font-weight: normal;
            font-family: 'Quicksand', sans-serif;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #5E2563;
            color: white;
            border: 0;
            text-transform: uppercase;
            font-family: 'Quicksand', sans-serif;
            border-radius: 10px;
        }

        button:active{
            font-weight: bold;
            background-color: #331436;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }        
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search movie" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this._shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);