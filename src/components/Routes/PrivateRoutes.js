import {Us} from '../Us/Us.js';
import {Contact} from '../Contact/Contact.js';
import {ItemListContainer} from '../ItemListContainer/ItemListContainer.js';
import {Footer} from '../Footer/Footer.js';
import {Navbar} from '../Navbar/Navbar.js';
import {Navbar2} from '../Navbar/Navbar2.js';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer.js';
import {Cart} from '../Cart/Cart.js';
import {Routes, Route, Navigate} from 'react-router-dom'
import {UserInfo} from '../UserInfo/UserInfo.js'



export const PrivateRoutes = () => {

	return (

		<>
		  <Navbar/>

		  <UserInfo/>

	      <Routes>   
	        <Route path='/' element={<ItemListContainer/>}/>
	        <Route path='/categorias/:categoryId' element={<ItemListContainer/>}/> 
	        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
	        <Route path='/cart' element={<Cart/>}/> 
	        <Route path='/categorias' element={<Navbar2/>}/>
	        <Route path='/contacto' element={<Contact/>}/>
	        <Route path='/nosotros' element={<Us/>}/>
	        <Route path='*' element={<Navigate to ={"/"}/>}/>
	      </Routes>

      <Footer/>
		</>
	)
}




