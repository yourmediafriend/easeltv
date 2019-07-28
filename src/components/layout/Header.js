import React from "react";
import "./Header.css";

const Header = props => {
	
	const { pageTitle } = props;

	return (
		<header className="header">
			<h1 className="header_page_title">{pageTitle}</h1>
		</header>
	);
};

export default Header;
