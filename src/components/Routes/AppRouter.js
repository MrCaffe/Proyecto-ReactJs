import {ItemCount} from '../ItemCount/ItemCount.js';
import {Categoria} from '../Categoria/Categoria.js';
import {CartWidget} from '../CartWidget/CartWidget.js';

import {useAuthContext} from '../Context/AuthContext.js'
import {BrowserRouter} from 'react-router-dom'
import {PrivateRoutes} from '../Routes/PrivateRoutes.js'
import {PublicRoutes} from '../Routes/PublicRoutes.js'


export const AppRouter = () => {

	const {auth} = useAuthContext ()

	console.log(auth)

	return (
    <BrowserRouter>

    {
    	auth.loggedIn
    	? <PrivateRoutes/>
    	: <PublicRoutes/>
    }


    </BrowserRouter>
	)
}












