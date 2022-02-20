import { ControladorLogin } from "./controladorLogin.js";
import { ControladorNotificaciones } from "../notificaciones/controladorNotificaciones.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginFormulario = document.querySelector('form');
    
    const elementoNotificacion = document.querySelector('.notificacion');

    const controladorNotificaciones = new ControladorNotificaciones(elementoNotificacion);

    const controladorLogin = new ControladorLogin(loginFormulario);
})