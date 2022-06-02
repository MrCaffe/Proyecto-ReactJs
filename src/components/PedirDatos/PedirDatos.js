
import {productos} from '../ItemDetailContainer/ItemDetailContainer.js';

export const PedirDatos = () => {
	return new Promise((resolve, reject) => {		
		setTimeout (() => {
			resolve(productos)
		}, 2000)
	})
}