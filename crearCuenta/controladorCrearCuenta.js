import { pubSub } from '../pubSub.js';
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
        const inputElements = Array.from(this.elementoFormulario.querySelectorAll('input'));

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
            
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'las contraseñas no son iguales')
        });
    }
}