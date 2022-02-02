
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
    const currentTime = new Date(tweet.created_at).toISOString();

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





