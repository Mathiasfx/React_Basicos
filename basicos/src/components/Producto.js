import React from 'react';

//componente
const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;
    //FUncionAgregarProducto al carrito
    const seleccionarProducto = id =>{
       const producto = productos.filter(producto => producto.id === id);
       console.log(producto);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>USD {precio}</p>
            <button 
                type="button"
                onClick = {()=> seleccionarProducto(id)}
            >Comprar</button>
        </div>
    
        );
}
 
export default Producto;