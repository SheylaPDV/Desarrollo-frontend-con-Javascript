  
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

// bubling propagacion de eventos hacia los padres
const divListElement = document.querySelector("div");

divListElement.forEach((div) => {
    div.addEventListener("click", (event) => {
        console.log(event.target);
        // parar la propagacion
        event.stopPropagation();
    })
})
//  mas ejemplos

const buttonListElement = document.querySelectorAll('button');

//cuando haces una funcion manejadora de eventos, solo va a recibir el evento.
for (const button of buttonListElement) { 
    button.addEventListener('click', (eventito) => {
         //innerHTML accede al contenido dentro de la etiqueta, recibe modo lectura(textContent tambien vale)
        drawTime(eventito.target.innerHTML); 
    });
}

// innerHTML aqui accede en modo escritura
function drawTime(message) {
    document.getElementById('demo').innerHTML = message; 
}

drawTime('texto inciial');


// EJEMPLO PROMESA

function calculateRandomNumber() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10);
            if(randomNumber % 2 === 0) {
              resolve(randomNumber);  
            } else {
              reject(randomNumber);
            }
            
        }, 1500);
    });
}

console.log('antes de calcular');

calculateRandomNumber()
.then((randomNumber) => {
    console.log(randomNumber);
})
.catch(() => {
    console.log('El numero es impar')
})
.finally(() => {
    console.log('numero calculado');
})

JSON.parse('string') //recibe un string
JSON.stringify({objeto}) //recibe objeto


//Promesas, se pueden escribir de 2 maneras:(hacen exactamente lo mismo)

function helloWorldPromise() {
    return new Promise(function(resolve, reject) {
        resolve('hello world')
    })
}
helloWorldPromise().then(message => {console.log(message) })

//////////////////////////////////////////////////////////////////////

async function helloWorldAsync() {
    return 'Hello world'
}

//funcion asyncrona que se ejecuta sola

(async () => {
    const result = await helloWorldAsync();
})();

//New promise ---> async
//.then ---> await
//cualquier metodo que use await, tiene que ser async

modeloServicioWallapop.getAnuncios()
        .then((anuncios) => { //espera una promesa con .then, cuando se resuelva se trae los anuncios y hace el for
            for (const anuncio of anuncios) {
                const elementoDeArticulo = document.createElement('article');
                const anuncioTemplate = constructorAnuncios(anuncio);

                elementoDeArticulo.innerHTML = anuncioTemplate;
                // incluir anuncio en el DOM
                listaDeAnuncios.appendChild(elementoDeArticulo);
            }