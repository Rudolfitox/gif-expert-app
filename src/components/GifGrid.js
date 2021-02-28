import React,{useState} from 'react'
///import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import { useFetchGifs }  from '../hooks/useFetchGifs';

export default function GifGrid({category}) {
    
    //const [images, setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(category);

    //console.log(data,loading)
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs) )
    // },[category])

    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=VuwP1YTIwkqEd3L2a7d7XcjAnqSpPOHw&q=${encodeURI(category)}&limit=10`
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();

    //     const gifs = data.map(img => {
    //         return {
    //             id:img.id,
    //             title:img.title,
    //             url:img.images?.downsized_medium.url

    //         }
    //     })
        
    //     console.log(gifs);
    //     setImages(gifs);
    // }

    //getGifs();

    return (

        <>  
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            
            <div className="card-grid">
                    {images.map(img =>
                        <GifGridItem 
                            key={img.id}
                            {...img} />       
                    )}
                
            </div>
        </>
    )
}
