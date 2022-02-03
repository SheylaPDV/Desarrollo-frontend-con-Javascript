
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { constructorAnuncios } from "./vistaAnuncios.js";


export function controladorListaAnuncios() {
    // contenedor donde pintar los tweets
    const listaDeAnuncios = document.querySelector('.lista-anuncios');

    const anuncios = modeloServicioWallapop.getAnuncios();

    

    // generar HTML del tweet
    for (const anuncio of anuncios) {
        const elementoDeArticulo = document.createElement('article');
        const anuncioTemplate = constructorAnuncios(anuncio);

        elementoDeArticulo.innerHTML = anuncioTemplate;
        // incluir tweet en el DOM
        listaDeAnuncios.appendChild(elementoDeArticulo);
    };
}

