import { servicioCrearCuenta } from "../crearCuenta/servicioCrearCuenta.js";

export default {
  async getAnuncios() {
    const url = "http://localhost:8000/api/products";

    let response;
    let productos;

    try {
      response = await fetch(url);
    } catch (error) {
      throw new Error("No he podido cargar los productos");
    }

    if (!response.ok) {
      throw new Error("Productos no encontrados");
    }

    try {
      productos = await response.json();
    } catch (error) {
      throw new Error("No he podido transformar la respuesta a json");
    }

    const transformarProducto = this.transformarProductos(productos);
    return transformarProducto;
  },
  async getAnuncio(anuncioId) {
    const url = `http://localhost:8000/api/products/${anuncioId}`;

    let response;
    let producto;

    try {
      response = await fetch(url);
    } catch (error) {
      throw new Error("No he podido ir a por el producto");
    }

    if (!response.ok) {
      throw new Error("Producto no encontrado");
    }

    try {
      producto = await response.json();
    } catch (error) {
      throw new Error("No he podido transformar la respuesta a json");
    }

    const transformarProducto = this.transformarProductos([producto]);

    return transformarProducto[0];
  },
  async borrarAnuncio(anuncioId) {
    const url = `http://localhost:8000/api/products/${anuncioId}`;

    let response;

    try {
      response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + servicioCrearCuenta.usuarioLogeado(),
        },
      });
    } catch (error) {
      throw new Error("No he podido borrar el anuncio");
    }

    if (!response.ok) {
      throw new Error("Producto no encontrado");
    }
  },

  transformarProductos(productos) {
    return productos.map((producto) => {
      const transformarProducto = {
        nombre: producto.nombre || producto.content,
        descripcion: producto.descripcion,
        precio: producto.precio,
        venta: producto.venta,
        userId: producto.userId || producto.handle,
        id: producto.id || 0,
        image:
          producto.image ||
          "https://idescargar.com/wp-content/uploads/2017/06/wallapop.png",
      };

      return transformarProducto;
    });
  },
};
