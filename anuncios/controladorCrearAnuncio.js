import { servicioCrearCuenta } from '../crearCuenta/servicioCrearCuenta.js';
import { pubSub } from '../pubSub.js';
import { servicioCrearAnuncio } from './ServicioCrearAnuncio.js'

export class ControladorCrearAnuncio {
    constructor(elementoCrearAnuncio) {
        this.elementoCrearAnuncio = elementoCrearAnuncio;

        this.subscribirAEventos()
    }

    subscribirAEventos() {
        this.botonCrear()
    }

    botonCrear() {

        const tokenUsuarioLogeado = servicioCrearCuenta.usuarioLogeado();
        console.log("Token JWT: " + tokenUsuarioLogeado)

        if (tokenUsuarioLogeado) {
            this.elementoCrearAnuncio.addEventListener('submit', (event) => {
                event.preventDefault();

                const formData = new FormData(this.elementoCrearAnuncio);

                const nombre = formData.get('nombre'); //traigo informacion del input
                const descripcion = formData.get('descripcion');
                const precio = formData.get('precio');
                const venta = formData.get('venta');
                const image = formData.get('imagen');

                this.crearAnuncio(nombre, descripcion, precio, venta, image, tokenUsuarioLogeado);
            });
        }

    }

    async crearAnuncio(nombre, descripcion, precio, venta, image, tokenUsuarioLogeado) {
        try {
            await servicioCrearAnuncio.crearAnuncio(nombre, descripcion, precio, venta, image, tokenUsuarioLogeado);
            window.location.href = '/';
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }
    }
}
