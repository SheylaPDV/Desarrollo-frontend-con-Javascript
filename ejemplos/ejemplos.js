  
// CREAR ETIQUETAS HTML DESDE JS 

//creacion de etiqueta nodo
const p1Element = document.createElement("p"); 

//le añado un texto
p1Element.textContent = "Parrafo nuevo"; 

const image1Element = document.createElement("img");

image1Element.src = "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp";

//selector de etiqueta donde quiero meter mi elemento creado
const mainElement = document.querySelector("main"); 

// pinto en pantalla el parrafo
mainElement.appendChild(p1Element); 

//pinto en pantalla la imagen
mainElement.appendChild(image1Element);

 //tsustituye lo que haya en main por lo que meta yo aqui
mainElement.innerHTML = "<p>Soy un parrafo destructor</p>";

//este evento, previene su comportamiento por defecto(no se abre la pestaña de google)
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
});

// bubling propagacion de eventos hacia arriba
const divListElement = document.querySelector("div");

divListElement.forEach((div) => {
    div.addEventListener("click", (event) => {
        console.log(event.target);
        // aqui diriamos que no se propagara el evento
        event.stopPropagation();
    })
})
