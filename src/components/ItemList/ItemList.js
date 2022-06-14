import {Item} from '../Item/Item.js'

export const ItemList = ({items}) => {

	return (
		<section>

			<h1 className="container"> Productos En Categoria </h1>

			{
				items.map((item) => <Item item={item} key={item.id}/>)
			}

		</section>
	)
}