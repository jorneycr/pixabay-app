import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  //state de la app
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {

    const cosultarAPI = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const key = '8134605-764a5a45ccf64ac92f13bb0bf';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarBusqueda(resultado.hits);
    
    }

    cosultarAPI();

  }, [busqueda])

  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Formulario</p>
          <Formulario guardarBusqueda={guardarBusqueda} />
        </div>
      </div>
    </>
  );
}

export default App;
