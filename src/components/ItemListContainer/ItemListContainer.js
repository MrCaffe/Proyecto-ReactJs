// Tools
import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

// Component
import {Products} from '../Mock/Mock.js'
import {ItemList} from '../ItemList/ItemList.js'
import {Loader} from '../Loader/Loader.js'

export const ItemListContainer = () => {

	const [items, setItems] = useState([])

	const [loading, setLoading] = useState(true)

	const {categoryId} = useParams()

	const PedirDatos = () => {
		return new Promise ((resolve, reject) => {
			setTimeout(() => {
				resolve(Products)		
			}, 1000)
		})	
	}


	useEffect ( () => {
		setLoading(true)
		// Peticion de Datos al Mock
		PedirDatos()
			.then ((resp) => {
				if (!categoryId) {
					setItems(resp)
				} else {
					setItems(resp.filter((item) => item.category === categoryId))
				}
			})
			.catch ((error) => {
				console.log(error)
			})
			.finally (() => {
				setLoading(false)
			})
	}, [categoryId])


	if (loading) {
		return 	<section className="container my-5">
							<Loader/>
						</section>
	}

	return (
		<section>

			<ItemList items={items}/>
		
		</section>

	)
}




