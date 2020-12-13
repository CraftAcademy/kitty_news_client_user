import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav id="navbar">
			<div>
				<Link id="header" to="/">
					News
				</Link>
        <Link id="header" to="/">
					Gothenburg
				</Link>
        <Link id="header" to="/">
					Economy
				</Link>
        <Link id="header" to="/">
					Politics
				</Link>
			</div>
		</nav>
	);
};

export default Header;
