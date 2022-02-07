
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { constructorAnuncios, constructorRuleta } from "./vistaAnuncios.js";


export async function controladorListaAnuncios(listaDeAnuncios) {

    const ruletaTemplate = constructorRuleta();

    listaDeAnuncios.innerHTML = ruletaTemplate;

    const anuncios = await modeloServicioWallapop.getAnuncios();

    for (const anuncio of anuncios) {
        const elementoDeArticulo = document.createElement('article');
        const anuncioTemplate = constructorAnuncios(anuncio);

        elementoDeArticulo.innerHTML = anuncioTemplate;
        // incluir anuncio en el DOM
        listaDeAnuncios.appendChild(elementoDeArticulo);
    }

    const loader = listaDeAnuncios.querySelector(".loader");
    // loader.remove();
    loader.classList.add("hidden");
    // loader.classList.remove("hidden"); // Eliminar
    // loader.classList.toggle("hidden");  //si tiene la clase se la quito, y si no la tiene se la pongo
    

}


