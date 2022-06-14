// Tools
import {useState} from 'react'

// Componentes
import {Count} from '../Count/Count.js'

export const ItemCount = () => {

	const [counter, setCounter] = useState(1)

	const increase = () => {
		setCounter (counter + 1)
	}

	const decrease = () => {
		counter > 0 && setCounter (counter - 1)
	}

return (
	<section>
	
		<Count add={increase} sub={decrease} counter={counter} />

	</section>
	)
}