
export function constructorAnuncios(producto) {
    const detalleVistaAnuncio = buildAnuncioView(producto);
    let anuncioTemplate = `
        <a href="/detalleAnuncio.html?id=${producto.id}">
            ${detalleVistaAnuncio}
        </a>
    `;
    return anuncioTemplate;
}


export function buildAnuncioView(producto) {
    // const currentTime = new Date(producto.precio).toLocaleString();

    let anuncioTemplate = `
        <img class="imagen" src=${producto.image}></img>
        
        <h1>${producto.nombre}</h1>
        <p>${producto.venta}</p>
        <p>${producto.descripcion}</p>
        <p>${producto.precio}</p>
    `;
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

export function notFoundAnuncioView() {
    return `
    
    <img class="not-found" src="../anuncios/images/notfound.jpg"></img>
    `;
}