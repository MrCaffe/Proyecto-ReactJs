export const Item = ({item}) => {

	return (
		<div>
			<h2> {item.nombre} </h2>
			<img src={item.img}/>
			<p> Cantidad de Hojas: {item.hojas}</p>
			<h4> Precio: ${item.precio} </h4>
			<hr/>
		</div>
	)
}