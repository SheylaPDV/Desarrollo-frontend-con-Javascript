'use strict';

// contenedor donde pintar los tweets
const elementosDeAnuncios = document.querySelector('.lista-anuncios');

// generar HTML del tweet
for (const anuncio of anuncios) {
    const elementoDeArticulo = document.createElement('article');
    elementoDeArticulo.innerHTML = anuncioTemplate;
    // incluir tweet en el DOM
    elementosDeAnuncios.appendChild(elementoDeArticulo);
};

