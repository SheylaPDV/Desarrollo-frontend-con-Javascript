class ServicioCrearAnuncio {
    constructor() {}

    async crearAnuncio(nombre, descripcion, precio, venta, token) {

        const body = {
            nombre,
            descripcion,
            precio,
            venta,
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

        console.log(data)
    
    }
}

export const servicioCrearAnuncio = new ServicioCrearAnuncio();