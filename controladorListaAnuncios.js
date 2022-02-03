
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { constructorAnuncios } from "./vistaAnuncios.js";


export function controladorListaAnuncios(listaDeAnuncios) {
    // contenedor donde pintar los anuncios
    const anuncios = modeloServicioWallapop.getAnuncios();

    // generar HTML del anuncio
    for (const anuncio of anuncios) {
        const elementoDeArticulo = document.createElement('article');
        const anuncioTemplate = constructorAnuncios(anuncio);

        elementoDeArticulo.innerHTML = anuncioTemplate;
        // incluir anuncio en el DOM
        listaDeAnuncios.appendChild(elementoDeArticulo);
    };
}

