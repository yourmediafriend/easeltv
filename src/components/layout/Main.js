import React from "react";
import "./Main.css";

const Main = props => {
	
	const { children } = props;

	return (
		<main className="main">
		    { children } 
		</main>
	);
};

export default Main;
