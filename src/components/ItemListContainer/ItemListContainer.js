// Tools
import {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

// Component
import {Products} from '../Mock/Mock.js'
import {ItemList} from '../ItemList/ItemList.js'

export const ItemListContainer = () => {

	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	const {categoryId} = useParams()
	console.log(categoryId)

	const PedirDatos = () => {
		return new Promise ((resolve, reject) => {
			setTimeout(() => {
				resolve(Products)		
			}, 1000)
		})	
	}


	useEffect ( () => {
		setLoading(true)

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

	return (
		<section>
			
			{
				loading
				? <Spinner animation="border" role="status">
  					<span className="visually-hidden">Loading...</span>
					</Spinner>

				: <ItemList items={items}/>
			}

		</section>

	)
}