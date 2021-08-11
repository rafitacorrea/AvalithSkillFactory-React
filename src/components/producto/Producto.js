import React from 'react';

const Producto = ({productos}) =>{
    return(
        <div>
            {productos.map(function(producto){
                return  <ul>
                    <li>{producto.name}</li>
                    <li>Precio ${producto.price}</li>
                    <li>{producto.description}</li>
                </ul>

            }) }
        </div>
    )
}

export default Producto;