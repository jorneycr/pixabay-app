import React, { useState } from 'react'
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);
    
    const BuscarImagen = e => {
        e.preventDefault();

        //validar
        if(termino.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        //enviar el termino  de la busqueda hacia el componnente principal
        guardarBusqueda(termino)
    }

    return ( 
        <form
            onSubmit={BuscarImagen}
        >
             <div className="row">
                 <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar una imagen, ejemplo: futbol o cafe"
                        onChange={e => guardarTermino(e.target.value)}
                    />
                 </div>
                 <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-danger btn-block"
                        value="Buscar"
                    />
                 </div>
             </div>
             {error ? <Error mensaje="Agregar un termino a la busqueda"/>:null}
        </form>
     );
}
 
export default Formulario;