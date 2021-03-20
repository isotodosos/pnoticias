import React from 'react';
import styles from './Formulario.module.css'; //otra forma de poner estilos. utilizando .module. utilizamos styles como si fuera un objeto
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {
    //048cf4a6533a4553ae7ae3726bef76dc {value : 'health', label: 'Salud'},{value : 'tecnology', label: 'Tecnologia'}
    const OPCIONES = [
        {value : 'general', label: 'General'},
        {value : 'business', label: 'Negocios'},
        {value : 'entertainment', label: 'Entretenimiento'},
        {value : 'science', label: 'Ciencia'},
        {value : 'sports', label: 'Deportes'}
        
    ]

    const [noticias, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticia = e => {
        e.preventDefault();


        guardarCategoria(noticias);
    };

    return(
      
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                  onSubmit={buscarNoticia}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    
                    <SelectNoticias/>

                    <div className='input-field col s12'>
                       
                        <input
                           type='submit'
                           className={`${styles.btn_block} btn-large amber darken-2`}
                           value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
  }
export default Formulario;