// Tools
import './CartWidget.scss'
import {BsCart3} from "react-icons/bs";
import {Link} from 'react-router-dom'
import {useContext} from 'react'

// Componentes
import {CartContext} from '../Context/CartContext'

// Code
export const CartWidget = () => {

	const {TotalQuantity} = useContext(CartContext)

	return (

		<Link to="/cart" className={`widget ${TotalQuantity() === 0 ? 'widget-hidden' : ''}`}>
			
			<button className="btn btn-primary btn-md"> Carrito <BsCart3/> </button>
			<span className="fs-3"> {TotalQuantity()} </span>
			
		</Link>
	)
}