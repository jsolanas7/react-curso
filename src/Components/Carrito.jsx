import React from 'react';

const Carrito = ({ carrito , addProduct}) => {
    const removeFromCarrito = (id) => {
        const result = carrito.filter( x => x.id !== id);
        addProduct(result);
    }

    return (
        <div>
            {carrito.length > 0
                ?
                carrito.map(item => {
                    return (
                        <div>
                            <h3>{item.name}</h3>
                            <button onClick = { () => removeFromCarrito(item.id)}>Eliminar</button>
                        </div>
                    )
                })
                :
                <h3>No hay productos en el carrito</h3>}
        </div>
    )
}

export default Carrito;