export class ControladorCrearCuenta {
    constructor(elementoFormulario) {
        this.elementoFormulario = elementoFormulario;

        this.subscribirAEventos();
    }

    subscribirAEventos() {
        const inputElements = Array.from(this.elementoFormulario.querySelectorAll('input'));

        inputElements.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                inputElements.every((inputElement) => inputElement.value);
            });
        });
    }
}