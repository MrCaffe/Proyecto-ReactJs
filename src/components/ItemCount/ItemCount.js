// Tools
import {useState, useEffect} from 'react'

// Componentes

export const ItemCount = ({max, setCounter, counter, onAdd}) => {

	const handleSumar = () => {
		counter < max && setCounter(counter + 1)
	}

	const handleRestar = () => {
		counter > 0 && setCounter(counter - 1)
	}

	const btnRestarConfig = {
		onClick: handleRestar,
		className: `btn mx-1 ${counter === 0 ? "btn-outline-danger" : "btn-outline-primary"} ${counter === 0 ? "min-value" : ''}`,
		disabled: counter === 0

	}

	if (max === 0) {
		return (
			<div className="my-3">
				<p> No Hay Stock de Este Producto </p>
			</div>
		)
	}
	
	return (
		<div>
			<button {...btnRestarConfig}> - </button>
			<span className='mx-2'> {counter } </span>
			<button onClick={handleSumar} className={counter === max ? "btn mx-1 btn-outline-danger" : "btn mx-1 btn-outline-primary"} disabled={counter === max}> + </button>
			<hr/>
			<button onClick={onAdd} disabled={counter === 0}> Agregar al Carrito </button>
		</div>

	)
}