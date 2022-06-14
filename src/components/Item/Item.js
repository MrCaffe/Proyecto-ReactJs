export const Item = ({item}) => {

	return (
		<div className="container">
			<h2> Nombre: {item.name} </h2>
			<h3> Precio: ${item.price}</h3>
			<img src={item.img}/>
			<h4> Descripcion: {item.description} </h4>
			<p> Stock Disponible: {item.stock} </p>
			<button className="btn btn-success"> Ver Detalle </button>
			<hr/>
		</div>
	)

}