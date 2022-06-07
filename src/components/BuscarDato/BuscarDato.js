import {useEffect, useState} from 'react'
import {productos} from '../ItemDetailContainer/ItemDetailContainer.js';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer.js';


export const BuscarDato = () => {

	const [id, setId] = useState(1)

	const handleSubmit= () => {
		id = 1 && setId(console.log ('Producto encontrado'))
	}


	useEffect(() => {
		fetch(`./ItemDetailContainer/ItemDetailContainer.js/${id}`)
			.then ((resp) => resp.json()) 
			.then ((data) => {
				setId(data)
			})
	}, [id])

	return (
		<section>
			<form>
				<label>
				  ID Producto: 
				   <input type="text" name="name" />
				</label>

				<input type="submit" value="Buscar" onClick={handleSubmit}/>
			</form>

		</section>



	)
}