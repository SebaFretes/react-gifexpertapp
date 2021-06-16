import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category )
    //         .then( imgs => setImages(imgs) )
    // }, [category])

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p>Cargando...</p> }
            {/* Si loading está en true aparece el cargando caso contrario, el data cargada */}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            { ...img } // utilizo el spread operator
                        />
                    ))   
                }
            </div>
        </>
    )
}
