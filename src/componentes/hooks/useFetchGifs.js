//----------------------------------------------------------------------------------------------------//

//<< LLAMADA LA FUNCION USEFETCHGIFS QUE SERIA IGUAL A LA CATEGORY, COMENZARA CON CREAR UN ESPACIO EN 
//<< MEMORIA QUE SERIA UN OBJETO QUE TENGA DENTRO DATA QUE TENDRIA UN ARREGLO VACIO Y QUE EL LOADING 
//<< SERIA TRUE, LUEGO CREARA Y EMPEZARA A CORRER EL USEEFFECT QUE LLAMARA LA PROMESA GETGIFS QUE 
//<< TENDRA DENTRO CATEGORY Y SI LA PROMESA SE CUMPLE IMGS EMPEZARA A CORRER CON LLAMAR A LA FUNCION
//<< SETTIMEUT QUE DENTRO DE ELLA MANDARA EL SETSTATE CON EL ARREGLO DE DATA: IMGS Y EL LOADING EN 
//<< FALSE, EL TIEMPO DEL SETTIMEUT SERA DE 2 SEGUNDOS, EL 

//----------------------------------------------------------------------------------------------------//

import { useState, useEffect } from 'react';
import { getGifs } from '../funciones-especificas/getGifs';

export const useFetchGifs = ( category ) => {

const [state, setState] = useState({

    data: [],
    loading: true

});

useEffect( () => {

    getGifs( category )
        .then( imgs => {

            setTimeout(() => {
            
                setState({

                    data: imgs,
                    loading: false

                }); 

            }, 2000);

        })

}, [ category ]);

    return state; // { data:[]. loading: true}

};
//----------------------------------------------------------------------------------------------------//


