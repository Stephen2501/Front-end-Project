import { Link } from "react-router-dom"

export default function Navbar() {
	return (<nav id ='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/articles'>Articles</Link>
        <Link to='/users'>Users</Link>
    </nav>
    )
}