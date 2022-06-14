// Styles
import './Navbar.scss'

// Tools
import {Link} from 'react-router-dom'

// Components
import {CartWidget} from '../CartWidget/CartWidget.js'



export const Navbar = () => {

  return (
    <header> 
      <nav className="navBar">
        
        <Link to={"/"} className="linkTitle"> <h1> E-Commerce </h1> </Link>  
        <Link to={"/categorias"} className="linkBar"> <button class="btn btn-primary btn-md"> Categorias </button> </Link>   
        <Link to={"/contacto"} className="linkBar"> <button class="btn btn-primary btn-md"> Contacto </button> </Link>   
        <Link to={"/nosotros"} className="linkBar"> <button class="btn btn-primary btn-md"> Nosotros </button> </Link>    
        <Link to={"/carrito"}> <CartWidget/> </Link>  
      </nav>
    </header>
  )
}