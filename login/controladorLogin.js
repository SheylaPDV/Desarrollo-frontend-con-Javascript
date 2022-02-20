import { servicioCrearCuenta } from "../crearCuenta/servicioCrearCuenta.js";
import { pubSub } from "../pubSub.js";

export class ControladorLogin {
    constructor(elementoLogin) {
        this.elementoLogin = elementoLogin;

        this.adjuntarEventos()
    }

    adjuntarEventos() {
        this.cambioDeInput();
        this.enviarFormularioLogin();
    }

    cambioDeInput() {
        const elementosInputs = Array.from(this.elementoLogin.querySelectorAll('input'));

        elementosInputs.forEach(elementoInput => {
            elementoInput.addEventListener('input', () => {
                const inputsLlenos = elementosInputs.every(elementoInput => elementoInput.value);

                if (inputsLlenos) {
                    this.elementoLogin.querySelector('button').removeAttribute('disabled');
                } else {
                    this.elementoLogin.querySelector('button').setAttribute('disabled', "");
                }
            });
        });
    }

    enviarFormularioLogin() {
        this.elementoLogin.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(this.elementoLogin);

            const username = formData.get('user');
            const password = formData.get('password');

            this.loginUsuario(username, password);
        });
    }

    async loginUsuario(username, password) {
        try {
            await servicioCrearCuenta.loginUsuario(username, password);
            window.location.href = '/';

        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }
    }
}

