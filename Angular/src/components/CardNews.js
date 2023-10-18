class Cardnews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
}

build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left")

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title")
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardright = document.createElement("div");
    cardright.setAttribute("class", "card_right")

    const newsImage = document.createElement("img");
    cardright.appendChild(newsImage);
    newsImage.src = this.getAttribute("photo") || "assets/photo-default.jpg"
    newsImage.alt= "Foto da Notícia"

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardright);


    return componentRoot;
}

styles(){
    const style = document.createElement("style");
    style.textContent = `
    .card{
        width: 80%;
        box-shadow: 1px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        -webkit-box-shadow: 11px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 11px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 11px 10px 5px 0px rgba(0,0,0,0.75);
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left > span{
        font-weight: 400;
    }
    
    .card_left > a{
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    
    .card_left > p{
        color: rgb( 70, 70, 70);
    }
    
    .card_right > img {
    display: flex;
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
    }
    ` 
    return style;
}

}
customElements.define("card-news", Cardnews);