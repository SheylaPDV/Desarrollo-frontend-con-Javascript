import { servicioCrearCuenta } from '../crearCuenta/servicioCrearCuenta.js';
import { pubSub } from '../pubSub.js';
import { servicioCrearAnuncio } from './ServicioCrearAnuncio.js'

export class ControladorCrearAnuncio {
    constructor(elementoCrearAnuncio) {
        this.elementoCrearAnuncio = elementoCrearAnuncio;

        this.subscribirAEventos()
    }

    subscribirAEventos() {
        // this.cambiosEnInputs()
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
    
                this.crearAnuncio(nombre, descripcion, precio, venta, tokenUsuarioLogeado);
            });
        }
    
    }

    async crearAnuncio(nombre, descripcion, precio, venta, tokenUsuarioLogeado) {
        try {
            await servicioCrearAnuncio.crearAnuncio(nombre, descripcion, precio, venta, tokenUsuarioLogeado);
            window.location.href = '/';
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }
    }
}
