import React,{Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    //crear State de Citas
    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, actualizarError] = useState(false);

    //funciaon que se ejecuta cuando el usuario escribe
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los Valores
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //cuando envia el formulario
    const submitCita = (e) =>{
        e.preventDefault();
        
        //Validar Formulario
        if(mascota.trim() ==='' || propietario.trim() === ''|| fecha.trim() ==='' ||
        hora.trim()==='' || sintomas.trim() ===''){
            actualizarError(true);
            return;
        }
        //eliminar mensaje previo
        actualizarError(false);
        
        //Asignar ID
        cita.id = uuidv4();
        
        //Crear Cita
        crearCita(cita);

        //Reiniciar Form
       actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
       });
        
    }
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>         
            {error ?<p className="alerta-error">Todos los campos son Obligatorios</p> : null }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="NombreMascota"  
                    onChange={actualizarState}    
                    value={mascota}         
                />      
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"   
                    onChange={actualizarState}         
                    value={propietario}     
                />      
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"    
                    onChange={actualizarState}     
                    value={fecha}      
                />      
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"    
                    onChange={actualizarState}    
                    value={hora}       
                />      
                <label>Sintomas</label>
                    <textarea
                        className="u-full-width"  
                        name="sintomas"
                        onChange={actualizarState}    
                        value={sintomas}                 
                    > </textarea>   

                <button
                    type="submit"
                    className="u-full-width button-primary" 
                >Agregar Cita</button>  
            </form>           
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;