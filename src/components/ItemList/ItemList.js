import {Item} from '../Item/Item.js'

export const ItemList = ({items}) => {
	return (
		<div>
			<h2 className="list__title"> Productos: </h2>
			<hr/>

			{
				items.map((item) => <Item key={item.id} item={item}/>)
			}
		</div>
	)
}