//----------------------------------------------------------------------------------------------------//

//<< ES LLAMADA LA FUNCION GETGIFS LA CUAL SERA IGUAL A CATEGORY, Y COMENZARA POR CREAR UN ESPACIO EN 
//<< MEMORIA QUE SE LLAMARA URL LO CUAL TENDRA DENTRO EL HTTPS API_KEY Y QUE ESTARA CON EL STRING DE QUE
//<< AL BUSCAR SE APLICARA LO QUE ESTA EN LA CATEGORY, LUEGO HARA LA PROMESA DE LA PETICION DE LA URL 
//<< QUE SERA IGUAL AL ESPACIO EN MEMORIA LLAMADO RESP, LUEGP DE ESO HARA OTRA PROMESA QUE SERIA LA DE
//<< RESP.JSON() QUE NOS SERVIRA PARA EXTRAER LA INFORMACION NESESARIA DE LAS IMAGENES, LUEGO CREAREMOS
//<< UN ESPACIO EN MEMORIA LLAMADO GIFS LO CUAL SERIA IGUAL A TODO LO QUE TENGA LA DATA Y RETORNAREMOS
//<< EN UN OBJETO QUE EXTRAERA EL ID,TITLE Y EL URL DE LA DATA, Y AL FINALIZAR ESTO RETONAREMOS EN EL
//<< ESPACIO EN MEMORIA GIFS DANDONOS TODA LA INFO DE LOS GIFS >>//

//----------------------------------------------------------------------------------------------------//

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2Z8FUzgjzUTyrGXTaIQtJLRIQa4boL1E&q=${ encodeURI( category ) }&limit=10`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };

    });

 return gifs;
}
//----------------------------------------------------------------------------------------------------//