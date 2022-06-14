export const Count = ({add, sub, counter}) => {


return (
	
	<div>
		<h5 className="mx-5"> Contador: {counter} </h5>
		<button className="btn btn-primary mx-4"  onClick={add}> Agregar </button>
		<button className="btn btn-danger" onClick={sub}> Quitar </button>
	</div>

	)
}