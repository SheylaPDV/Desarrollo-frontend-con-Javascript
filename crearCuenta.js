import { ControladorCrearCuenta } from "./controladorCrearCuenta.js"

document.addEventListener('DOMContentLoaded', () => { //escucho y si todo carga bien, lo muestra
    const elementoFormulario = document.querySelector('form');//lo que viene en formulario

    const controladorCrearCuenta = new ControladorCrearCuenta(elementoFormulario);//instanciamos la clase con el elemento para que haga lo que sea
});