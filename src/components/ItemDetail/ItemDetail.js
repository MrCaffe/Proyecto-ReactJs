// Tools
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

// Components
import {ItemCount} from '../ItemCount/ItemCount.js'
import {Count} from '../Count/Count.js'

export const ItemDetail = ({item}) => {

	const navigate = useNavigate()

	const handleVolver = () => {
		navigate(-1)
	}

	return (
		<section className="container">
			<h2> Nombre: {item.name} </h2>
			<h3> Precio: ${item.price}</h3>
			<img src={item.img}/>

			
			<ItemCount>
				<Count/>
			</ItemCount>
			<hr/>

			<button className="btn btn-warning mx-4" onClick={handleVolver}> Volver </button>
		</section>
	)

}