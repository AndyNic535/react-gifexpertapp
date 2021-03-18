//----------------------------------------------------------------------------------------------------//

//<< LLAMADA LA FUNCION GIFGRID QUE ES IGUAL A CATEGORY, CREARA UN ESPACIO EN MEMORIA QUE SERIA UN 
//<< OBJETO QUE TENDRA DENTRO DATA:IMAGES, LOADING Y SERIA IGUAL A USEFETCHGIFS(CATEGORY) (LO CUAL 
//<< ESTAMOS LLAMANDO A ESTA FUNCION EN ESTA VARIABLE), LUEGO  RETORNARA LA FUNCION EN UN </> QUE
//<< TENDRA DENTRO UNA ETIQUETA </H3> QUE MOSTRARA EN EL HTML LO QUE ESTA ESCRITO EN EL CATEGORY,
//<< LUEGO CADA VEZ QUE LA PAGINA ESTE CARGANDO HARA SALTAR LO QUE ESTA DENTRO DE LA ACCION LOADING
//<< QUE SERIA DE MOSTRAR EN EL HTML ATRAVEZ DE LA ETIQUETA </P> LOADING... , LUEGO CREARA UNA CAJA 
//<< CON LA ETIQUETA <DIV>  QUE HARA QUE LEA TODO LO QUE ESTA EN IMAGES Y ENVIARA A LLAMAR GIFGRIDITEM
//<< AL CUAL LE MANDAREMOS EL KEY QUE SERIA IGUAL AL IMG.ID >>//
//----------------------------------------------------------------------------------------------------//

import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
        <h3> {category} </h3>

        { loading && <p className="cargando ">LOADING...</p> }

        <div className="card-grid">
                {
                     images.map( img =>(
                     <GifGridItem
                     key={img.id}
                     {...img}
                     />
                     ))
                 }
        </div>
        </>
    )
}
//----------------------------------------------------------------------------------------------------//
