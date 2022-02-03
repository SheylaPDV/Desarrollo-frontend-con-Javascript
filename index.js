
const tweets = [
    {
    handler: 'Patinete',
    content: 'Algo que publico',
    created_at: '2022-01-31'
    },
    {
    handler: 'user02',
    content: 'Algo que publico',
    created_at: '2022-01-10',
    },
    {
    handler: 'user03',
    content: 'Algo que publico',
    created_at: '2022-01-29'
    },
];

// contenedor donde pintar los tweets
const tweetListElement = document.querySelector('.tweet-list');



// generar HTML del tweet


for (const tweet of tweets) {
    const currentTime = new Date(tweet.created_at).toLocaleString();

    const tweetTemplate = `
        <h1>${tweet.handler}</h1>
        <p>${tweet.content}</p>
        <p>${currentTime}</p>
    `;

    const tweetArticleElement = document.createElement('article');
    tweetArticleElement.innerHTML = tweetTemplate;

    // incluir tweet en el DOM
    tweetListElement.appendChild(tweetArticleElement);
};

const buttonListElement = document.querySelectorAll('button');

// buttonListElement.forEach((button) => {
//     console.log(button);
// })

for (const button of buttonListElement) { //cuando haces una funcion manejadora de eventos, solo va a recibir el evento.
    button.addEventListener('click', (eventito) => {
        drawTime(eventito.target.innerHTML);  //innerHTML accede al contenido dentro de la etiqueta, recibe modo lectura(textContent tambien vale)
    });
}

function drawTime(message) {
    document.getElementById('demo').innerHTML = message; // innerHTML aqui accede en modo escritura
}

drawTime('texto inciial');




