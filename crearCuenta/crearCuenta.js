import { ControladorCrearCuenta } from "./controladorCrearCuenta.js";
import { ControladorNotificaciones } from "../notificaciones/controladorNotificaciones.js";

document.addEventListener('DOMContentLoaded', () => { //escucho y si todo carga bien, lo muestra
    const elementoFormulario = document.querySelector('form');//lo que viene en formulario

    const elementoNotificacion = document.querySelector('.notificacion');

    const controladorNotificacion = new ControladorNotificaciones(elementoNotificacion);

    const controladorCrearCuenta = new ControladorCrearCuenta(elementoFormulario);//instanciamos la clase con el elemento para que haga lo que sea
});