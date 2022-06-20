import {useState, useEffect} from 'react'


export const Contact = () => {
	

	return (
		<div>
			<h1 className="container bg-primary"> CONTACTO</h1>
			<hr/>

			<form>
				<h4> Datos Personales </h4>

				<input 
					type={'text'}	
					className='form-control my-2'
				/>

				<input 
					type={'email'}	
					className='form-control my-2'
				/>

				<input 
					type={'text'}	
					className='form-control my-2'
				/>


			</form>

		</div>
	)
}