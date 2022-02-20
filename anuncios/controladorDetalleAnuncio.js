import { servicioCrearCuenta } from "../crearCuenta/servicioCrearCuenta.js";
import { pubSub } from "../pubSub.js"
import { decodeJWT } from "../utils/decodeJWT.js";
import ModeloServicioWallapop from "./ModeloServicioWallapop.js";
import { buildAnuncioView } from "./vistaAnuncios.js";

export class ControladorDetalleAnuncios {
    constructor(detalleAnuncio) {
        this.detalleAnuncio = detalleAnuncio;
        this.producto = null;
    }

    async verAnuncio(anuncioId) {
        if (!anuncioId) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, 'Id del anuncio no es valido');

            return;
        }
        try {
            this.producto = await ModeloServicioWallapop.getAnuncio(anuncioId);
            const anuncioTemplate = buildAnuncioView(this.producto);
            this.detalleAnuncio.innerHTML = anuncioTemplate;
            this.botonDelete();
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
        }
    }

    botonDelete() {
        const tokenUsuarioLogeado = servicioCrearCuenta.usuarioLogeado();
        console.log("Token JWT: " + tokenUsuarioLogeado)

        if (tokenUsuarioLogeado) {
            const infoUsuario = decodeJWT(tokenUsuarioLogeado);
            const esDueño = this.dueñoDeAnuncio(infoUsuario.userId);

            if (esDueño) {
                this.dibujarBotonDelete();
            }
        }
    }

    dueñoDeAnuncio(userId) {
        return userId === this.producto.userId;
    }

    dibujarBotonDelete() {
        const elementoBoton = document.createElement("button");
        elementoBoton.textContent = 'Borrar producto';

        this.detalleAnuncio.appendChild(elementoBoton);
        this.detalleAnuncio.addEventListener("click", () => {
            this.borrarAnuncio();
        });
    }

    async borrarAnuncio() {
        const confirmacionParaEliminar = window.confirm('¿Estás seguro de eliminar este anuncio?');
        if (confirmacionParaEliminar) {
            try {
                await ModeloServicioWallapop.borrarAnuncio(this.producto.id);
                window.location.href = '/';
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_ERROR_NOTIFICATION, error);
            }

        }
    }
}