
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { constructorAnuncios, constructorRuleta } from "./vistaAnuncios.js";


export async function controladorListaAnuncios(listaDeAnuncios) {
    let anuncios;

    const ruletaTemplate = constructorRuleta();


    listaDeAnuncios.innerHTML = ruletaTemplate;

    try {
        anuncios = await modeloServicioWallapop.getAnuncios();

        for (const anuncio of anuncios) {
            const elementoDeArticulo = document.createElement('article');
            const anuncioTemplate = constructorAnuncios(anuncio);

            elementoDeArticulo.innerHTML = anuncioTemplate;
            // incluir anuncio en el DOM
            listaDeAnuncios.appendChild(elementoDeArticulo);
        }
    } catch (error) {
        alert('error al obtener los anuncios')

    } finally {
        const loader = listaDeAnuncios.querySelector(".loader");
        loader.remove();
    }
}

export class ControladorListaAnuncios {
    listaDeAnuncios = null;

    constructor(listaDeAnuncios) {
        this.listaDeAnuncios = listaDeAnuncios;

    }

    async pintarAnuncios() {
        let anuncios;

        const ruletaTemplate = constructorRuleta();


        this.listaDeAnuncios.innerHTML = ruletaTemplate;

        try {
            anuncios = await modeloServicioWallapop.getAnuncios();

            for (const anuncio of anuncios) {
                const elementoDeArticulo = document.createElement('article');
                const anuncioTemplate = constructorAnuncios(anuncio);

                elementoDeArticulo.innerHTML = anuncioTemplate;
                // incluir anuncio en el DOM
                this.listaDeAnuncios.appendChild(elementoDeArticulo);
            }
        } catch (error) {
            alert('error al obtener los anuncios')

        } finally {
            const loader = this.listaDeAnuncios.querySelector(".loader");
            loader.remove();
        }

    }
}


// const controller = new controladorListaAnuncios();


