import {useEffect, useState} from 'react'


export const PokeApi = () => {

	const [pokemon, setPokemon] = useState(null)
	const [id, setId] = useState(1)
	
	const handleSiguiente = () => {
		id <= 251 && setId(id + 1)
	}

	const handleAnterior = () => {
		id > 1 && setId(id - 1)
	}

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then ((resp) => resp.json()) 
			.then ((data) => {
				setPokemon(data)
			})
	}, [id])


	return (
		<div className="container my-5">
			<h2> Poke API </h2>
			<hr/>

			<input type="text"/>
			<hr/>
			{
				pokemon ?
				<>
					<h3>{pokemon.name}</h3>
					<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
					<hr/>
				</>
				: null
			}

			<button className="btn btn-warning mx-5" onClick={handleAnterior}> Anterior </button>
			<button className="btn btn-primary" onClick={handleSiguiente}> Siguiente </button>
		</div>
		)
}