import './Products.scss'

export const Products = ( {titulo = 'Titulo por Defecto', content = 'Este es el contenido por Defecto'} )  => {

	return (
		<section className="products">

			<h2 className="products__title"> {titulo} </h2>
			<hr/>

			<p> {content} </p>

		</section>
	)
}
