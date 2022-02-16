
export function constructorAnuncios(producto) {
    // const currentTime = new Date(producto.precio).toLocaleString();

    let anuncioTemplate = `
        <a href="/anuncios/detalleAnuncio.html?id=${producto.id}">
            <h1>${producto.nombre}</h1>
            <p>${producto.descripcion}</p>
            <p>${producto.precio}</p>
            <p>${producto.venta}</p>
            <img src=${producto.image}></img>
        </a>
    `;

    anuncioTemplate += `<img src=${producto.image}></img>`
    

    return anuncioTemplate;
}

export function constructorRuleta() {
    return `<div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`;
}