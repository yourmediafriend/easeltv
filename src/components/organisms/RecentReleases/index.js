import React from "react";
import PropTypes from "prop-types";

import getRecentReleases from "../../../apis/themoviedbApi";

class RecentReleases extends React.Component {

    componentDidMount() {
        this.getRecentReleasesX();
    }

    async getRecentReleasesX()  {

		const recentReleases = await getRecentReleases();

		console.log(recentReleases);

		this.setState(() => ({ recentReleases }));

    }

	render() {
		return (
			<div>
				Empty Compo
			</div>
		);
	}
}

RecentReleases.props = {

};

export default RecentReleases;

