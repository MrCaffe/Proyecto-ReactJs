import {Link} from 'react-router-dom'


export const Item = ({item}) => {


	return (
		<div className="container">
			<h2> Nombre: {item.name} </h2>
			<h3> Precio: ${item.price}</h3>
			<img src={item.img}/>
			<h4> Descripcion: {item.description} </h4>
			<p> Stock Disponible: {item.stock} </p>

			<Link to={`item/${item.id}`}> 
				<button className="btn btn-success my-2"> Ver Detalle </button>
			</Link>
			<hr/>
		</div>
	)

}