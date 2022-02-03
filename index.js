import { controladorListaAnuncios } from "./controladorListaAnuncios.js";

document.addEventListener('DOMContentLoaded', () => {
    const listaDeAnuncios = document.querySelector('.lista-anuncios');
    controladorListaAnuncios(listaDeAnuncios);
});

// cuando mi DOM este listo, ejecuto el controlador
