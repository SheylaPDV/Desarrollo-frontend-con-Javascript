export function decodeJWT(token) {
    let decodeJWT;
    try {
       const tokenEncadenado = atob(token.split('.')[1]);
       decodeJWT = JSON.parse(tokenEncadenado)
    } catch (error) {
        return null;
    }
    return decodeJWT;
}