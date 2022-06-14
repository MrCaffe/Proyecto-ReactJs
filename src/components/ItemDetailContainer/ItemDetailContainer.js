// Tools
import {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'

// Component
import {ItemListContainer} from '../ItemListContainer/ItemListContainer.js'
import {ItemDetail} from '../ItemDetail/ItemDetail.js'


export const ItemDetailContainer = () => {
	const [loading2, setLoading2] = useState([true])
	const [id, setId] = useState([])

	const PedirId = () => {
		return new Promise ((resolve, reject) =>{
			setTimeout(() =>{
				resolve(ItemListContainer)
			}, 1000)
		})
	}

	useEffect ( () => {
		PedirId()
			.then ((resp) => {
				setId(resp)
			})
			.catch ((error) => {
				console.log(error)
			})
			.finally (() => {
				setLoading2(false)
			})
		},[])


	return (
		<section>
			{
				loading2
				? <Spinner animation="border" role="status">
  					<span className="visually-hidden">Loading...</span>
					</Spinner>

				: <ItemDetail item={id}/>
			}
		</section>

	)
}