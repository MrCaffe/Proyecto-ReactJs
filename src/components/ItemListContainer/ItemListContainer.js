// Tools
import {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'

// Component
import {Products} from '../Mock/Mock.js'
import {ItemList} from '../ItemList/ItemList.js'

export const ItemListContainer = () => {

	const [items, setItems] = useState([])
	const [loading, setLoading] = useState([true])

	const PedirDatos = () => {
		return new Promise ((resolve, reject) => {
			setTimeout(() => {
				resolve(Products)		
			}, 2000)
		})	
	}


	useEffect ( () => {
		PedirDatos()
			.then ((resp) => {
				setItems(resp)
			})
			.catch ((error) => {
				console.log(error)
			})
			.finally (() => {
				setLoading(false)
			})
	}, [])

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