// Tools
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'


// Components
import {CartContextProdiver} from './components/Context/CartContext.js';
import {AuthProvider} from './components/Context/AuthContext.js'
import {AppRouter} from './components/Routes/AppRouter.js'

function App() {

  return (

    <AuthProvider>

      <CartContextProdiver>

        <AppRouter/>
          
      </CartContextProdiver>

    </AuthProvider>
  );
}

export default App;
