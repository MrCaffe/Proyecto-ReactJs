import {useAuthContext} from '../Context/AuthContext.js'

export const UserInfo = () => {

	const {auth, LogOut} = useAuthContext()

	return (
		<div className="container d-flex justify-content-between py-2">
			<p> Bienvenido , {auth.userId} </p>

			<button onClick={LogOut} className="btn btn-danger"> LogOut </button>

		</div>
	)
}