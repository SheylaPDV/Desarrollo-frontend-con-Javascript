  
// CREAR ETIQUETAS HTML DESDE JS 


const p1Element = document.createElement("p"); //creacion de etiqueta nodo
p1Element.textContent = "Parrafo nuevo"; //le añado un texto

const image1Element = document.createElement("img");
image1Element.src = "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp";

const mainElement = document.querySelector("main"); //selector de etiqueta donde quiero meter mi elemento creado

mainElement.appendChild(p1Element); // pinto en pantalla el parrafo
mainElement.appendChild(image1Element);//pinto en pantalla la imagen

mainElement.innerHTML = "<p>Soy un parrafo destructor</p>"; //tsustituye lo que haya en main por lo que meta yo aqui



