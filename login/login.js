import { ControladorLogin } from "./controladorLogin";

document.addEventListener('DomContentLoaded', () => {
    const loginFormulario = document.querySelector('form');

    const controladorLogin = new ControladorLogin(loginFormulario);
})