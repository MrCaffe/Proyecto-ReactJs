import {useContext} from 'react'
import {CartEmpty} from '../Cart/CartEmpty.js'
import {CartContext, useCartContextProvider} from '../Context/CartContext.js'
import {BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'


export const Cart = () => {

	const {cart, TotalPrice, EmptyCart, RemoveItem} = useContext(CartContext)

	if (cart.length === 0) return <CartEmpty/>



	return (
		<div className="container my-5">
			<h2> Tu Compra: </h2>
			<hr/>

			{
				cart.map((item) => (
				<div key={item.id} className="my-2">
					<h5> {item.name} </h5>
					<p> Cantidad: {item.cantidad} </p>
					<h6> Precio: ${item.price * item.cantidad} </h6>
					<button onClick={() => RemoveItem(item.id)} className="btn btn-danger"><BsFillTrashFill/> </button>
					<hr/>
				</div>
				))
			}	

			<h4> Total: ${TotalPrice()} </h4>

			<button onClick={EmptyCart} className="btn btn-danger"> Vaciar Carrito </button>
		
		</div>
	)
}