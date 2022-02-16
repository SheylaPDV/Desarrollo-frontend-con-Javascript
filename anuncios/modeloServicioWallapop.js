
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

    transformarProductos(productos) {
        return productos.map((producto) => {
            const transformarproducto = {
                nombre: producto.nombre || producto.name,
                descripcion: producto.descripcion,
                precio: producto.precio,
                venta: producto.venta,
                id: producto.id || 0,
                image: producto.avatar || 'https://idescargar.com/wp-content/uploads/2017/06/wallapop.png'
            };
            
            return transformarproducto;
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