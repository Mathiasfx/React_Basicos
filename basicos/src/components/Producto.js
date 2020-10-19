import React from 'react';

//componente
const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;
    //FUncionAgregarProducto al carrito
    const seleccionarProducto = id =>{
       const producto = productos.filter(producto => producto.id === id)[0];
      agregarProducto([
         ...carrito,producto]);
    }
    //EliminarProducto
    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id);
        //Agregar PRODUCTOS en el STATE
        agregarProducto(productos);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>USD {precio}</p>
            
            {productos
            ?
            (
                <button 
                    type="button"
                    onClick = {()=> seleccionarProducto(id)}
                >Comprar</button>
            )        
            :
            (
                <button 
                type="button"     
                onClick ={()=> eliminarProducto(id) }         
                >Eliminar</button> 
            )
            }
        </div>
    
        );
}
 
export default Producto;