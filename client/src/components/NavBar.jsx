// This component renders the navigation bar

import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div id="navbar-container">
			<Link to="/">Home</Link>
			<Link to="/drinks">Drinks</Link>
		</div>
	);
}
