import { pubSub } from "../pubSub.js"
import modeloServicioWallapop from "./modeloServicioWallapop.js";
import { buildAnuncioView } from "./vistaAnuncios.js";

export class ControladorDetalleAnuncios {
    constructor(detalleAnuncio) {
        this.detalleAnuncio = detalleAnuncio;
    }

    async verAnuncio(anuncioId) {
        if (!anuncioId) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'Id del tweet no valido');

            return;
        }
        try {
            const producto = await modeloServicioWallapop.getAnuncio(anuncioId);
            const anuncioTemplate = buildAnuncioView(producto);
            this.detalleAnuncio.innerHTML = anuncioTemplate;
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }
        
    }
}