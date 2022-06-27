// Tools
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

// Component
import {Products} from '../Mock/Mock.js'
import {ItemDetail} from '../ItemDetail/ItemDetail.js'
import {Loader} from '../Loader/Loader.js'

export const ItemDetailContainer = () => {

	const [item, setItem] = useState(null)
	const [loading, setLoading] = useState(true)

	const {itemId} = useParams()

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
				setItem(resp.find((item) => item.id === Number(itemId)))
			})
			.catch ((error) => {
				console.log("Error: ", error)
			})
			.finally (() => {
				setLoading(false)
			})
	}, [])

	return (
		<section>
			
			{
				loading
				? <Loader/>

				: <ItemDetail item={item}/>
			}

		</section>

	)
}