import './LoginScreen.scss'
import {useState} from 'react'
import {useAuthContext} from '../Context/AuthContext'

export const LoginScreen = ()  => {

	const {login, error} = useAuthContext()

	console.log(error.email)
	console.log(error.password)


	const [values, setValues] = useState ({
		email: '',
		password: ''
	})

	const handleInputChange = (e) => {
		setValues ({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		login(values)

	}

	return (
		<div className="login-screen"> 
			<div className="login-container"> 
				<h2> Login </h2>
				<hr/>

				<form onSubmit={handleSubmit}>
					<input
						type={"email"}
						name="email"
						values={values.email}
						onChange={handleInputChange}
						className="form-control my-2"
						placeholder= 'Ingrese su correo'
					/>
					{error.email && <small className="text-danger">{error.email} </small>}

					<input
						type={"password"}
						name="password"
						values={values.password}
						onChange={handleInputChange}
						className="form-control my-2"
						placeholder= 'Ingrese una contraseña'
					/>
					{error.password && <small className="text-danger">{error.password} </small>}

					<button className="btn btn-primary" type='submit'> Login </button>

				</form>

			</div> 
		</div>


	)
}