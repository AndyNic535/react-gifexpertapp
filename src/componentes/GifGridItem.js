//----------------------------------------------------------------------------------------------------//

//<< LLAMA LA FUNCION GIFGRIDITEM QUE SERIA IGUAL AL TITLE Y URL EXTRAIDOS ANTERIORMENTE, COMENZARA A 
//<< CORRER LA FUNCION LA CUAL INMEDIATAMENTE RETORNARIA EN UN <DIV/> QUE MOSTRARA EN EL HTML ATRAVEZ 
//<< DE LA ETIQUETA IMG LOS GIFS QUE TENEMOS EN LOS URL Y LES MANDAREMOS LOS TITULOS DE CADA UNO,  
//<< PARA QUE LOS MUESTRE EN EL HTML CON LA ETIQUETA <P/> >>//   

//----------------------------------------------------------------------------------------------------//

import React from 'react'

export const GifGridItem = ({title,url}) => {

    return (
        <div className="card animate__heartBeat">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
//----------------------------------------------------------------------------------------------------//
