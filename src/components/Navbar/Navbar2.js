// Styles
import './Navbar2.scss'

// Tools
import {Link} from 'react-router-dom'

// Components
import {CartWidget} from '../CartWidget/CartWidget.js'

export const Navbar2 = () => {

  return (
    <header> 
      <nav className="navBar2">
        <h3 className="text-success"> Productos Disponibles </h3>
        <Link to={"/"} className="linkBar"> <button className="btn btn-success btn-md"> Inicio </button> </Link>
        <Link to={"/categorias/remeras"} className="linkBar"> <button className="btn btn-success btn-md"> Remeras </button> </Link>  
        <Link to={"/categorias/buzos"} className="linkBar"> <button className="btn btn-success btn-md"> Buzos </button> </Link>   
        <Link to={"/categorias/pantalones"} className="linkBar"> <button className="btn btn-success btn-md"> Pantalones </button> </Link>   
        <Link to={"/carrito"}> <CartWidget/> </Link>
      </nav>
    </header>
  )
}