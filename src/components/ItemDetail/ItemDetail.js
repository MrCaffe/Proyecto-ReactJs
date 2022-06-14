export const ItemDetail = ({item}) => {
	

	return (
		<div className="container">
			<h2> Nombre: {item.name} </h2>
			<h3> Precio: ${item.price}</h3>
			<img src={item.img}/>
			<hr/>
		</div>
	)

}