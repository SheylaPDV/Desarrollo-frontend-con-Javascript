import { pubSub } from "../pubSub.js"

export class ControladorDetalleAnuncios {
    constructor(detalleAnuncio) {
        this.detalleAnuncio = detalleAnuncio;
    }

    verAnuncio(anuncioId) {
        if (!anuncioId) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'Id del tweet no valido')
        }
    }
}