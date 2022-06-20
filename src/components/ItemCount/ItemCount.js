// Tools
import {useState, useEffect} from 'react'

// Componentes

export const ItemCount = ({max, setCounter, counter, onAdd}) => {

	const handleSumar = () => {
		counter < max && setCounter(counter + 1)
	}

	const handleRestar = () => {
		counter > 1 && setCounter(counter - 1)
	}
	
	return (
		<div>
			<button onClick={handleRestar}> Restar </button>
			<span className='mx-2'> {counter } </span>
			<button onClick={handleSumar}> Sumar </button>
			<hr/>
			<button onClick={onAdd}> Agregar al Carrito </button>
		</div>


	)
}