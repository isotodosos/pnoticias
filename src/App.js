import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const[categoria, guardarCategoria] =  useState('');
  const[noticias, guardarNoticias] =  useState([]);

  useEffect(() => {

    

    const consultarApi = async () =>{

      const url = `https://newsapi.org/v2/top-headlines?country=se&category=${categoria}&apiKey=048cf4a6533a4553ae7ae3726bef76dc`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }

    consultarApi();
    
  }, [categoria]);
  
  return (
    <Fragment>

      <Header
         titulo='Buscador de noticias'
      />   

      <div className='container white'>
         
        <Formulario
          guardarCategoria= {guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />

      </div>

    </Fragment>
  );
}

export default App;
