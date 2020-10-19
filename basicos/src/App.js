import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  //Crear Listado
  const [productos, guardarProductos] = useState([
    {id: 1, nombre:'Camisa ReactJS', precio:80},
    {id: 2, nombre:'Camisa Angular', precio:50},
    {id: 3, nombre:'Camisa Node', precio:96},
    {id: 4, nombre:'Camisa Blanca', precio:63},
  ]);

  //state para carrito de Compras
  const [carrito, agregarProducto] = useState([]);

  //ObtenerFecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
      Titulo='Tienda Virtual'/>

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
            key={producto.id}
            producto = {producto}
            carrito = {carrito}
            productos = {productos}
            agregarProducto = {agregarProducto}
        />
      ))}
      <Carrito
      carrito = {carrito}
      agregarProducto = {agregarProducto}/>
      <Footer
      fecha = {fecha}/>
    </Fragment>
  );
}

export default App;
