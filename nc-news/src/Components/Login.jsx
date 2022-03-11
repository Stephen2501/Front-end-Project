import { useState, useContext } from 'react';
import { fetchUsers } from '../utils/userApi';
import { UserLoginContext } from '../Context/userLogin';

export default function Login() {
	const [newLogin, setNewLogin] = useState('');
	const [loginMsg, setLoginMsg] = useState('');

	const {setCurrentUser} = useContext(UserLoginContext)

	const handleSubmit = (event) => {
		event.preventDefault();
		fetchUsers()
			.then((res) => {
				let existingUsers = []
				res.forEach((user) => existingUsers.push(user.username))
				console.log(existingUsers)
				if (existingUsers.includes(newLogin)) {
					setLoginMsg('Successful login');
					setCurrentUser(newLogin);
					setNewLogin('');
				} else {
					setLoginMsg('Invalid User Try Again!')
				}
			})
			.catch(() => {
				setLoginMsg('Invalid User Try Again!');
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				username : <span />{' '}
				<input
					value={newLogin}
					onChange={(event) => setNewLogin(event.target.value)}
				/>
			</label>
			<button type='submit'>Login</button>
			<h3>{loginMsg}</h3>
		</form>
	);
}
