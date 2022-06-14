// Styles
import './Navbar.scss'

// Components
import {CartWidget} from '../CartWidget/CartWidget.js'



export const Navbar = () => {

  return (
    <header> 
      <ul className="navBar">
        <h1> E-Commerce </h1>
        <li className="linkBar"> ENLACE_1 </li>  
        <li className="linkBar"> ENLACE_2  </li>  
        <li className="linkBar"> ENLACE_3  </li>  
        <li className="linkBar"> ENLACE_4 </li>  
        <li>< CartWidget/> </li>
      </ul>
    </header>
  )
}