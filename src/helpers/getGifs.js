
//HELPERS ACCIONES QUE VAN A HACER ALGO EN ESPECIFICO
//PUEDEN RECIBIR VALORES Y RETORNAR ALGO

//ESTA FUNCION REGRESA UNA PROMESA QUE RETORNARA LOS GIFS
export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VuwP1YTIwkqEd3L2a7d7XcjAnqSpPOHw&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url

        }
    })
    
    return gifs
    //console.log(gifs);
    //setImages(gifs);
}