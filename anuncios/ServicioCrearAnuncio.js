class ServicioCrearAnuncio {
    constructor() { }

    async crearAnuncio(nombre, descripcion, precio, venta, image, token) {

        const body = {
            nombre,
            descripcion,
            precio,
            venta,
            image,
        };

        //Este codigo es lo mismo que hacemos en postman

        const response = await fetch("http://localhost:8000/api/productos", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token

            },
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
    }
}

export const servicioCrearAnuncio = new ServicioCrearAnuncio();