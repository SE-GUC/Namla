import axios from 'axios';

import setAuthToken  from '../../helpers/setAuthToken'



// export const logout = () => dispatch => {
// 	dispatch({ type: LOGOUT });
// };


export const login = (userData) => dispatch => {
	axios.post('http://localhost:5000/api/NebnyAdmins/login', userData)
	.then( res => {
		const { token } = res.data
		localStorage.setItem('jwtToken', token)
		setAuthToken(token)

	})
	.catch(err => console.log('error'))
		
	};
