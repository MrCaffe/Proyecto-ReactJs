
import {useEffect, useState} from "react";
import {Spinner} from 'react-bootstrap'
import {ItemCount} from '../ItemCount/ItemCount.js';
import {PedirDatos} from '../PedirDatos/PedirDatos.js';
import {ItemList} from '../ItemList/ItemList.js'
import {BuscarDato} from '../BuscarDato/BuscarDato.js'

export const ItemListContainer = () => {

	const [items, setItems] = useState([])
	const [loading, setLoading] = useState([true])


	useEffect (() =>  {
		setLoading(true)

		PedirDatos()
			.then((resp) => {
				setItems(resp)
			})
			.catch((error) => {
				console.log("Error: ", error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	return (
		<section className="list__container mx-5 mt-4">

		<BuscarDato/>

			{
				loading
				? <Spinner animation="border" role="status">
  					<span className="visually-hidden">Loading...</span>
					</Spinner>
				: <ItemList items={items}/>		
			}

			<ItemCount/>

		</section>
	);
}