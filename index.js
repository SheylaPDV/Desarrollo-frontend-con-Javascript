import { ControladorListaAnuncios } from "./controladorListaAnuncios.js";
import { ControladorNotificaciones } from "./controladorNotificaciones.js";
// import { constructorAnuncios } from "./vistaAnuncios.js";

document.addEventListener('DOMContentLoaded', async () => {
    const listaDeAnuncios = document.querySelector('.lista-anuncios');
    // controladorListaAnuncios(listaDeAnuncios);
    const elementoNotificacion = document.querySelector('.notificacion');
    const controladorNotificaciones = new ControladorNotificaciones(elementoNotificacion);
    controladorNotificaciones.show("mensaje de ejemplo");

    const controladorListaAnuncios =  new ControladorListaAnuncios(listaDeAnuncios);
    await controladorListaAnuncios.pintarAnuncios();
});


