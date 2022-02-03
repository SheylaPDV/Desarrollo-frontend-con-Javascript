'use strict';

export function (recibirAnuncios) {
    const currentTime = new Date(anuncio.precio).toLocaleString();

    const anuncioTemplate = `
        <h1>${anuncio.nombre}</h1>
        <p>${anuncio.foto}</p>
        <p>${anuncio.descripcion}</p>
        <p>${currentTime}</p>
        <p>${anuncio.venta}</p>
    `;

    return recibirAnuncios;
}