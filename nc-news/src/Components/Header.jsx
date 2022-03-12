import { Link } from 'react-router-dom';

import NavBar from './Nav-Bar';

export default function Header() {
	return (
		<div>
		<header className='head'>
			<h1>NC News</h1>
			<Link to='/login' className='account-login'>
				Login
			</Link>
		</header>
			<NavBar />
		</div>
	);
}