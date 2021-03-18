//----------------------------------------------------------------------------------------------------//

//<< SE LLAMA LA FUNCION GIFEXPERTAPP Y CREARA UN ESPACIO EN MEMORIA LLAMADO CATEGORIAS QUE TENDRA
//<< DENTRO "DRAGON BALL" DESPUES LA FUNCION RETORNARA EN MOSTRAR ATRAVEZ DE ETIQUETAS (</>) EL TITULO
//<< "GIF APP", LLAMARA A ADDCATEGORY (LE MANDARA SETCATEGORIAS A ADDCATEGORY), CREARA UNA LISTA CON 
//<< <OL></OL> LA CUAL MOSTRARA Y HARA CORRER LO QUE NOSOTROS TENGAMOS DENTRO DE NUESTRO ARREGLO DE 
//<< CATEGORIAS, Y DENTRO DE ESO LLAMAREMOS A GIFGRID Y LE MANDAREMOS EL KEY = { CATEGORY } Y DESPUES
//<< CATEGORY = { CATEGORY } Y SERRAMOS LA LISTA ORDENA >>//

//----------------------------------------------------------------------------------------------------//

import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ["One puchman", "Samurai X", "Dragon ball" ];

    const [categorias, setCategorias] = useState(["Dragon ball"]);

//    const handleAdd = () => {
//    setCategorias([...categorias, "Inuyasha"])        
//        setCategorias(cats => [...cats, "Inuyasha"]);
//    }

    return (
    <div>

      <h2 className="nombre">Gifs App</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol className="busqueda">
        {
           categorias.map(category => (
             <GifGrid 
             key={ category }
             category={ category }
             />
           ))
        }
      </ol>

    </div>
    )
}
//----------------------------------------------------------------------------------------------------//
