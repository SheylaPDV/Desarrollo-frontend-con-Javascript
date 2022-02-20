import { servicioCrearCuenta } from "../crearCuenta/servicioCrearCuenta.js";

export default {
    async getAnuncios() {
        const url = "http://localhost:8000/api/productos"

        let response;
        let productos;

        try {
            response = await fetch(url);
        } catch (error) {
            throw new Error('No he podido cargar los productos');
        }

        if (!response.ok) {
            throw new Error("Productos no encontrados");
        }

        try {
            productos = await response.json();
        } catch (error) {
            throw new Error('No he podido transformar la respuesta a json');
        }

        const transformarProducto = this.transformarProductos(productos);
        return transformarProducto;

    },
    async getAnuncio(anuncioId) {
        const url = `http://localhost:8000/api/productos/${anuncioId}`;

        let response;
        let producto;

        try {
            response = await fetch(url);
        } catch (error) {
            throw new Error('No he podido ir a por el producto');
        }

        if (!response.ok) {
            throw new Error("Producto no encontrado");
        }

        try {
            producto = await response.json();
        } catch (error) {
            throw new Error('No he podido transformar la respuesta a json');
        }

        const transformarProducto = this.transformarProductos([producto]);
        
        return transformarProducto[0];
    },
    async borrarAnuncio(anuncioId) {
        const url = `http://localhost:8000/api/productos/${anuncioId}`;

        let response;
       

        try {
            response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer " + servicioCrearCuenta.usuarioLogeado(),
                },
            });
        } catch (error) {
            throw new Error('No he podido borrar el anuncio');
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
                image: producto.image || 'https://idescargar.com/wp-content/uploads/2017/06/wallapop.png',
            };
            
            return transformarProducto;
        });
    }
    // nuevoGetAnuncios() {
    //     const url = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json'

    //     return new Promise(function (resolve, reject) {
    //         fetch(url) //devuelve promesa
    //             .catch((error) => {
    //                 console.log(error);
    //                 reject('No he podido ir a por los tweets');
    //             })
    //             .then((responseHttp) => {
    //                 console.log(responseHttp);
    //                 return responseHttp.json(); //el json devuelve otra promesa
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 reject('no he podido transofrmar la respuesta a json');
    //             })
    //             .then((data) => {
    //                 resolve(data);
    //             });
    //     });
    // },
};