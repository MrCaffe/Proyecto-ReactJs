// Tools
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {CartContext} from '../Context/CartContext.js'
import {useContext, useEffect, useState } from 'react'

// Components
import {ItemCount} from '../ItemCount/ItemCount.js'
import {MemoComp} from '../Ejemplos/MemoComp.js'
// import {Count} from '../Count/Count.js'

export const ItemDetail = ({item}) => {

	const {addItem, isInCart} = useContext(CartContext)

	const [cantidad, setCantidad] = useState(0)

	const navigate = useNavigate()

	const handleVolver = () => {
		navigate(-1)
	}

	const handleAgregar = () => {

		if (cantidad === 0) return

		const itemToCart = {
			...item,
			cantidad
		}

		addItem(itemToCart)
	}


	return (
		<section className="container">
			<h2> Nombre: {item.name} </h2>
			<h3> Precio: ${item.price}</h3>
			<MemoComp/>

			<img src={item.img}/>
			<hr/>

			{
				isInCart(item.id)
				? <Link to="/cart" className="btn btn-success"> Terminar mi compra </Link>
				: <ItemCount
						max={item.stock}
						counter={cantidad}
						setCounter={setCantidad}
						onAdd={handleAgregar}
			/>

			}



			

			<button className="btn btn-warning mx-4" onClick={handleVolver}> Volver </button>
		</section>
	)
}