//----------------------------------------------------------------------------------------------------//

//<< LLAMA LA FUNCION ADDCATEGORY QUE SERIA IGUAL A SETCATEGORIAS Y LUEGO CREARA UN ESPACIO EN MEMORIA 
//<< QUE SE LLAMARA INPUTVALUE QUE TENDRA UN VALOR DE STRING VACIO, LUEGO SE CREARA UNA FUNCION QUE ES 
//<< LLAMADA HANDLEINPUTCHANGUE QUE SERA IGUAL A E (QUE SERIA E DE ELEMENTO) QUE DESPUES MANDARA 
//<< AL SETINPUTVALUE (E.TARGET.VALUE) QUE SERIA LO QUE SE ESTA ESCRIBIENDO EN EL INPUT,DESPUE DE ESO 
//<< CREARA OTRA FUNCION LLAMADA HANDLESUBMIT QUE SERA IGUAL A E QUE HARA QUE EL SUBMIT NO CARGUE TODA
//<< LA PAGINA CADA VEZ QUE SEA APRETADO. DESPUES SI EL LARGO DE LO QUE ESTA ESCRITO EN EL INPUTVALUE
//<< ES MAYOR A 2 MANDARA SETCATEGORIAS CON EL VALOR DE INPUTVALUE AL ARREGLO CATEGORIAS Y LUEGO DE ESO
//<< QUEDARA CON EL INPUTVALUE CON EL STRING VACIO, Y POR ULTIMO RETORNARA TODO ESTO EN EL INPUT QUE 
//<< QUE APLICAREMOS EN EL HTML(LO CUAL TENDRA TODAS ESTAS FUNCIONES COMO POR EJEMPLO: EL INPUT ES DE 
//<< TIPO TEXTO, EL IMPUT TENDRA EL VALOR DEL INPUTVALUE Y QUE ONCHANGE TENDRA VALOR Y LLAMARA A LA 
//<< FUNCION HANDLEINPUTCHANGE) >>//

//----------------------------------------------------------------------------------------------------//

import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState(" "); // useState(); es undefine

    const handleInputChange = (e) => {
//        console.log(e.target.value)
        setInputValue(e.target.value) // eso es lo que se esta escribiento en el input
    }

    const handleSubmit = (e) => {
        e.preventDefault();
//        console.log("Submir hecho");

        if (inputValue.trim().length > 2) {

            setCategorias(cats => [inputValue, ...cats]);
            setInputValue(" ");
        }
    }

    return (
        <form onSubmit={handleSubmit}>

          <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />   
        
        </form>

    )
}

// Candado para tus codigos

AddCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
}
//----------------------------------------------------------------------------------------------------//

