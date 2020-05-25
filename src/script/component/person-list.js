import './person-item.js';

class PersonList extends HTMLElement{
    constructor(){
        super();
        this._shadowDOM = this.attachShadow({mode: "open"});
    }

    set persons(persons){
        this._persons = persons;
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
        this._persons.forEach(person =>{
            const personItemElement = document.createElement("person-item");
            personItemElement.person = person;
            this._shadowDOM.appendChild(personItemElement);
        })
    }
}

customElements.define("person-list", PersonList);