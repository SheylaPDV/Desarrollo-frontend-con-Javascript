
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { constructorAnuncios } from "./vistaAnuncios.js";


export async function controladorListaAnuncios(listaDeAnuncios) {
    // contenedor donde pintar los anuncios
    // modeloServicioWallapop.getAnuncios()
        // .then((anuncios) => { //espera una promesa con .then, cuando se resuelva se trae los anuncios y hace el for
        //     for (const anuncio of anuncios) {
        //         const elementoDeArticulo = document.createElement('article');
        //         const anuncioTemplate = constructorAnuncios(anuncio);

        //         elementoDeArticulo.innerHTML = anuncioTemplate;
        //         // incluir anuncio en el DOM
        //         listaDeAnuncios.appendChild(elementoDeArticulo);
        //     }

    const anuncios = await modeloServicioWallapop.getAnuncios();

    for (const anuncio of anuncios) {
        const elementoDeArticulo = document.createElement('article');
        const anuncioTemplate = constructorAnuncios(anuncio);

        elementoDeArticulo.innerHTML = anuncioTemplate;
        // incluir anuncio en el DOM
        listaDeAnuncios.appendChild(elementoDeArticulo);
    }

}

