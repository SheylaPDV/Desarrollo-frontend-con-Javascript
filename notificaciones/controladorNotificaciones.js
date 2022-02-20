import { pubSub } from "../pubSub.js";
import { vistaNotificacion } from "./vistaNotificacion.js";

export class ControladorNotificaciones {
    constructor(elementoNotificacion) {
        this.elementoNotificacion = elementoNotificacion;

        this.subscribeEventos();
    }

    subscribeEventos() {
        pubSub.subscribe(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, (message) => { //subscriber, escucha el mensaje de controlador lista anuncios a traves de pubSub
            this.show(message)
        });
        // pubSub.subscribe(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION).remove(); borrar evento despues de subscibirse para liberar memoria
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