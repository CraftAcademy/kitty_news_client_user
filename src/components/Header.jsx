import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav data-cy="navbar">
			<div>
				<Link data-cy="header" to="/">
					News
				</Link>
        <Link data-cy="header" to="/">
					Gothenburg
				</Link>
        <Link data-cy="header" to="/">
					Economy
				</Link>
        <Link data-cy="header" to="/">
					Politics
				</Link>
			</div>
		</nav>
	);
};

export default Header;
