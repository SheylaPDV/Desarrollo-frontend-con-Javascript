import { vistaNotificacion } from "./vistaNotificacion.js";


export class ControladorNotificaciones {
    constructor(elementoNotificacion) {
        this.elementoNotificacion = elementoNotificacion;
    }

    show(message) {
        const notificacionTemplate = vistaNotificacion(message);
        
        this.elementoNotificacion.innerHTML = notificacionTemplate;

        const cerrarBoton = this.elementoNotificacion.querySelector('button');

        cerrarBoton.addEventListener('click', (event) => {
            this.elementoNotificacion.innerHTML = "";
        })
    }
}