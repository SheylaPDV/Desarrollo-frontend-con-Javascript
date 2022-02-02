
const tweet = {
    handler: 'user01',
    content: 'Algo que publico',
    created_at: '2022-01-31',
};

// contenedor donde pintar los tweets
const tweetListElement = document.querySelector('.tweet-list');

// generar HTML del tweet
const currentTime = new Date(tweet.created_at)
const tweetTemplate = `
    <h1>${tweet.handler}</h1>
    <p>${tweet.content}</p>
    <p>${currentTime}</p>
`;

const tweetArticleElement = document.createElement('article');
tweetArticleElement.innerHTML = tweetTemplate;
// incluir tweet en el DOM
tweetListElement.appendChild(tweetArticleElement);

