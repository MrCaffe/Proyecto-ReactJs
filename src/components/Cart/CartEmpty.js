
import {Link} from 'react-router-dom'

export const CartEmpty = () => {

	return (
		<div className="container my-5">
			<h2> Tu carrito esta vacio </h2>
			<hr/>

			<Link to="/" className="btn btn-primary"> Ir A Comprar </Link>
		</div>
	)
}