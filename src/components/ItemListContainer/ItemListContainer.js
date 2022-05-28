import './ItemListContainer.scss'
import {Button} from 'react-bootstrap'
import {ItemCount} from '../ItemCount/ItemCount.js';

export const ItemListContainer = ({name, id, type, cant, style}) => {

	return (
		<section className="list__container mx-5 mt-4">

			<h2 className="list__title"> Producto: {name} </h2>
			<hr/>

			<p> Articulo numero: {id} </p>
			<p> Tipo de Hoja: {type} </p>
			<p> Cantidad de Hojas: {cant} </p>
			<p> Estilo de Hoja: {style} </p>

			<ItemCount/>

		</section>


	);
}