// Tools
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'


// Components
import {Navbar} from './components/Navbar/Navbar.js';
import {Navbar2} from './components/Navbar/Navbar2.js';
import {Footer} from './components/Footer/Footer.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';
import {Contact} from './components/Contact/Contact.js';
import {Us} from './components/Us/Us.js';
import {Categoria} from './components/Categoria/Categoria.js';
import {CartWidget} from './components/CartWidget/CartWidget.js';
import {CartContext} from './components/Context/CartContext.js';
import {Cart} from './components/Cart/Cart.js';

function App() {

  const [cart, setCart] = useState ([])

  const addItem = (item) => {
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const TotalPrice = () => {
    return cart.reduce (( acc, prod) => acc += ( prod.price*prod.cantidad ), 0)
  }

  const TotalQuantity = () => {
    return cart.reduce ((acc,prod) => acc += prod.cantidad, 0)
  }

  const EmptyCart = () => {
    setCart([])
  }

  return (

    <CartContext.Provider value={ {cart, addItem, isInCart, TotalPrice, TotalQuantity, EmptyCart} }>

      <BrowserRouter>

        <Navbar/>

        <Routes>
          
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categorias/:categoryId' element={<ItemListContainer/>}/> 
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/categorias' element={<Navbar2/>}/>
          {/*<Route path='/carrito' element={<ItemCount/>}/>*/}
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/nosotros' element={<Us/>}/>

          <Route path='*' element={<Navigate to ={"/"}/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>

      </CartContext.Provider>
  );
}

export default App;
