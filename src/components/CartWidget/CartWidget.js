import './CartWidget.scss'
import {BsCart3} from "react-icons/bs";

import {Button} from 'react-bootstrap'

export const CartWidget = () => {

	return (
		<section className="cart__container mx-5"> 

			<h2> Carrito </h2>

			<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

			<Button variant="success" size="sm"> Ver <BsCart3/> </Button> 

		</section>
	);
}