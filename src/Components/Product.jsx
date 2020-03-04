import React from 'react';

function Product({name, id, products, carrito, addProduct}){

    const selectProduct = (id) => {
        const product = products.find( x => x.id == id);
        addProduct([
            ...carrito,
            product
        ])
    }

    return(
        <div>
            <h3>{name}</h3>
            <button onClick = { () => selectProduct(id) }>Agregar</button>
        </div>
    )
}

export default Product;