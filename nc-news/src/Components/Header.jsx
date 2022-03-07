import { Link } from 'react-router-dom';

import NavBar from './Nav-Bar';

export default function Header() { // Creates header
	return (
		<header>
			<h1>NC News</h1>
			<Link to='/login' className='accountAdmin'>
				Login
			</Link>
			<NavBar />
		</header>
	);
}