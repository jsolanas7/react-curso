import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Product from './Components/Product';
import Carrito from './Components/Carrito';
import Pokemon from './Components/Pokemon';
import './Components/style.css'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Producto 1'
    },
    {
      id: 2,
      name: 'Producto 2 '
    },
    {
      id: 3,
      name: 'Producto 3'
    },
  ])

  const [carrito, addProduct] = useState([]);

  const showClick = (title) => {
    console.log(title)
  }
  return (
    <div className="App">
      <Header />
      <h1>Listas</h1>
      <div className="container">
        <div>
        {products.map(item => {
          return (
            <Product
              name={item.name}
              key={item.id}
              id={item.id}
              products={products}
              carrito={carrito}
              addProduct={addProduct}
            />
          )
        })}
        </div>
          <Carrito
            carrito={carrito}
            addProduct= {addProduct}
          />
      </div>
      <Pokemon/>
      <Footer
        footerText='Todos los derechos reservados &copy;'
      />
    </div>
  );
}

export default App;
