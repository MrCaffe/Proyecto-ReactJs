import {useState, useEffect} from "react"
import {Button} from 'react-bootstrap'


export const ItemCount = (counter) => {

	let [contador, setContador] = useState(0)

	const incrementar = () => {
		setContador(contador + 1)
	}

	const disminuir = () => {
		setContador(contador - 1)
	}

	const reset = () => {
		setContador(contador = 0)
	}


	return (
		<section className="container my-5">
			<h2> Productos en Carrito: {contador} </h2>
			<hr/>

			<Button className="mx-2" variant="success" size="sm" onClick={incrementar}> Agregar </Button>

			<Button className="mx-2" variant="danger" size="sm" onClick={disminuir}> Quitar </Button>

			<Button className="mx-2" variant="warning" size="sm" onClick={reset}> Resetear </Button>

			<p className="m t-2"> Ultima Conexion: {new Date ().toLocaleString()} </p>

		</section>



		);
}












