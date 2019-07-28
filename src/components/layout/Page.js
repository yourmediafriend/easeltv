import React from "react";
import PropTypes from "prop-types";

const Page = props => {

    const {children} = props

	return (
		<div>
			{children}
		</div>
	);
};

Page.props = {
	children: PropTypes.object
};

export default Page;
