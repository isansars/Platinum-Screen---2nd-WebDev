class AppBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-image: linear-gradient(to bottom right, #65799B, #5E2563);
                text-shadow: 0px 0px 3px #000000;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            #logo {
                padding: 20px;
                font-family: 'Parisienne', cursive;
                font-size: 32px;
            }
        </style>
        <h2 id="logo">Platinum Screen</h2>`;
    }
}

customElements.define("app-bar", AppBar);