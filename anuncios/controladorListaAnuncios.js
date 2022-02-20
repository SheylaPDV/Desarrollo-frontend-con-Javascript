import { servicioCrearCuenta } from "../crearCuenta/servicioCrearCuenta.js";
import { pubSub } from "../pubSub.js";
import ModeloServicioWallapop from "./ModeloServicioWallapop.js";
import { buildAnuncioView, constructorAnuncios, constructorRuleta, notFoundAnuncioView } from "./vistaAnuncios.js";


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

            this.verBotonSubirAnuncio();

            anuncios = await ModeloServicioWallapop.getAnuncios();

            if (anuncios.length === 0) {
                this.listaDeAnuncios.innerHTML = notFoundAnuncioView();
            }

            for (const anuncio of anuncios) {
                const elementoDeArticulo = document.createElement('article');
                const anuncioTemplate = constructorAnuncios(anuncio);

                elementoDeArticulo.innerHTML = anuncioTemplate;
                // incluir anuncio en el DOM
                this.listaDeAnuncios.appendChild(elementoDeArticulo);
            }

            // comprobar que el usuario este logueado, y si lo esta pinto el botonn

        } catch (error) {
            // this.controladorNotificaciones.show("error obteniendo anuncios");

            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'Error obteniendo los productos'); //informar de un error (publisher) a pubSub
            // alert('error al obtener los anuncios')

        } finally {
            const loader = this.listaDeAnuncios.querySelector(".loader");
            loader.remove();
        }
    }

    verBotonSubirAnuncio() {
        const tokenUsuarioLogeado = servicioCrearCuenta.usuarioLogeado();
        console.log("Token JWT: " + tokenUsuarioLogeado)

        if (tokenUsuarioLogeado) {
            this.dibujarBotonSubida();
        }
    }

    dibujarBotonSubida() {
        // Creo boton 
        const elementoBoton = document.createElement("button");
        // Edito el texto del boton
        elementoBoton.textContent = 'Subir producto +';
        elementoBoton.className = 'boton-sesion'
        // Referencio el Div id=barra
        const barra = document.getElementById("barra");
        // Añado el elemento boton
        barra.insertBefore(elementoBoton, barra.firstChild);
        // Añado el evento click
        elementoBoton.addEventListener("click", () => {
            window.location.href = '/crearAnuncio.html';
        });
    }

}


// const controller = new controladorListaAnuncios();


