import React from 'react';
import Producto from '../producto/Producto';


const Catalogo = () =>{
    const productos = [
        {name: 'Pepsi', price: 200, description: 'Pepsi, también conocido como Pepsi-Cola, es una gaseosa de cola', stock: true},
        {name: 'Galletitas', price: 120, description: 'Galletitas surtidas', stock: false}
    ]

    return(
        <div>
            <Producto productos={productos}/>
        </div>
    )
}

export default Catalogo;