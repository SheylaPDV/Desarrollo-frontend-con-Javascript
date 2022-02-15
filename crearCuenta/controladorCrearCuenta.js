import { pubSub } from '../pubSub.js';
import { servicioCrearCuenta } from './servicioCrearCuenta.js';
export class ControladorCrearCuenta {
    constructor(elementoFormulario) {
        this.elementoFormulario = elementoFormulario;

        this.subscribirAEventos();
    }

    subscribirAEventos() {
        this.cambiosEnInputs()
        this.botonSubmit()
    }

    cambiosEnInputs() {
        const inputElements = Array.from(this.elementoFormulario.querySelectorAll("input"));

        inputElements.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                const inputsCompletados = inputElements.every((inputElement) => inputElement.value);

                if (inputsCompletados) {
                    this.elementoFormulario.querySelector('button').removeAttribute('disabled');
                } else {
                    this.elementoFormulario.querySelector('button').setAttribute('disabled', '');
                }
            });
        });

    }

    botonSubmit() {
        this.elementoFormulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(this.elementoFormulario);

            const username = formData.get('textInput'); //traigo informacion del input
            const passwordInput = formData.get('passwordInput');
            const passwordMatchInput = formData.get('passwordMatchInput');

            const contraseñasIguales = this.validacionContraseñasIguales(passwordInput, passwordMatchInput)

            if (!contraseñasIguales) {
                pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'las contraseñas no son iguales');
                return;
            }

            const contraseñaValida = this.contraseñaCumpleRegExp(passwordInput)

            if (!contraseñaValida) {
                pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'La contraseña debe contener solo numeros o letras');
                return;
            }

            this.crearUsuario(username, passwordInput)
        });
    }

    validacionContraseñasIguales(passwordInput, passwordMatchInput) {
        return passwordInput === passwordMatchInput;
    }

    contraseñaCumpleRegExp(password) {
        const contraseñaRegExp = new RegExp(/^[a-zA-Z0-9]*$/);

        return contraseñaRegExp.test(password)
    }

    async crearUsuario(username, passwordInput) {
        try {
            await servicioCrearCuenta.crearUsuario(username, passwordInput);
            this.loginUsuario(username, passwordInput);
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }
    }

    async loginUsuario(username, passwordInput) {
        try {
            await servicioCrearCuenta.loginUsuario(username, passwordInput);
            window.location.href = '/';
          
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }

    }
}