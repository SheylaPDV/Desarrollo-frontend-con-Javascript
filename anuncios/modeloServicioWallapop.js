
export default {
    async getAnuncios() {
        const url = "https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json"

        let response;
        let anuncios;

        try {
            response = await fetch(url);
        } catch (error) {
            throw new Error(' no he podido ir a por los tweets');
        }

        if (!response.ok) {
            throw new Error("Tweets no encontrados");
        }

        try {
            anuncios = await response.json();
        } catch (error) {
            throw new Error('he podido transformar la respuesta a json');
        }

        return anuncios;
    },
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