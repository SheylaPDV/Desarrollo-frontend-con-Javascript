import { pubSub } from "../pubSub.js";
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { constructorAnuncios, constructorRuleta } from "./vistaAnuncios.js";


export class ControladorListaAnuncios {
    listaDeAnuncios = null;

    constructor(listaDeAnuncios, controladorNotificaciones) {
        this.listaDeAnuncios = listaDeAnuncios;
        this.controladorNotificaciones = controladorNotificaciones;
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
            // this.controladorNotificaciones.show("error obteniendo anuncios");

            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'Error obteniendo los productos'); //informar de un error (publisher) a pubSub
            // alert('error al obtener los anuncios')

        } finally {
            const loader = this.listaDeAnuncios.querySelector(".loader");
            loader.remove();
        }

    }
}


// const controller = new controladorListaAnuncios();


