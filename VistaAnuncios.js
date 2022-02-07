
export function constructorAnuncios(anuncio) {
    const currentTime = new Date(anuncio.precio).toLocaleString();

    const anuncioTemplate = `
        <h1>${anuncio.pseudo}</h1>
        <p>${anuncio.foto}</p>
        <p>${anuncio.content}</p>
        <p>${currentTime}</p>
        <p>${anuncio.venta}</p>
        <span>${anuncio.retweets} retweets y ${anuncio.retweets} likes</span>
    `;

    return anuncioTemplate;
}

export function constructorRuleta() {
    return `<div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`;
}