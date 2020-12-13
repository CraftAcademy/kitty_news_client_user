import React from "react";
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

const Header = () => {
	return (
		<Segment inverted>
			<Menu inverted secondary>
        <Menu.Item 
          data-cy="header-news"
          as={Link}
          to="/">
					News
				</Menu.Item>
        <Menu.Item
          data-cy="header-gothenburg"
          to="/"
          as={Link}>
					Gothenburg
				</Menu.Item >
        <Menu.Item
          data-cy="header-economy"
          to="/"
          as={Link}>
					Economy
				</Menu.Item >
        <Menu.Item
          data-cy="header-politics"
          to="/"
          as={Link}>
					Politics
				</Menu.Item >
			</Menu>
		</Segment>
	);
};

export default Header;
