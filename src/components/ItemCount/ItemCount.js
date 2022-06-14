// Tools
import {useState, useEffect} from 'react'

// Componentes
import {Count} from '../Count/Count.js'

export const ItemCount = () => {

		const Datos = () => {
		return new Promise ((resolve, reject) => {
				resolve(setContador(counter))
				reject(window.removeEventListener)
			})	
		}

	const [counter, setCounter] = useState(1)

	const decrease = () => {
		counter > 0 && setCounter (counter - 1)
	}

	const increase = () => {
		setCounter (counter + 1)
	}

	const [contador, setContador] = useState(0)

	useEffect (() => {
		const clicker = () => {
			setContador(contador)
		}
		Datos()
			.then ((resp) => {
				})
			.catch ((error) => {
				console.log(error)
		})
	}, [counter])

return (
	<section>
	
		<Count add={increase} sub={decrease} counter={counter}/>

	</section>
	)
}