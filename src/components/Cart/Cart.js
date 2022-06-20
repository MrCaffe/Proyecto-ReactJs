import {useContext} from 'react'
import {CartContext} from '../Context/CartContext'



export const Cart = () => {

	const {cart, TotalPrice, EmptyCart} = useContext(CartContext)

	return (
			<div className="container my-5">
				<h2> Tu Compra </h2>
				<hr/>

			{
				cart.map((item) => (
				<div key={item.id} className="my-2">
					<h5> {item.name} </h5>
					<p> Cantidad: {item.cantidad} </p>
					<h6> Precio: ${item.price * item.cantidad} </h6>
					<hr/>
				</div>
				))
			}	

			<h4> Total: ${TotalPrice()} </h4>

			<button onClick={EmptyCart} className="btn btn-danger"> Vaciar Carrito </button>
			
			</div>

		)

}