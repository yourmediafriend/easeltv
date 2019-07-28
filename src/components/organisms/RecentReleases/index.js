import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { getRecentReleases } from "../../../apis/themoviedbApi";

import MovieGrid from "../MovieGrid";

class RecentReleases extends React.Component {

	state={};

    componentDidMount() {
        this.getRecentReleases();
    }

    async getRecentReleases()  {
		const recentReleases = await getRecentReleases();
		console.log('getRecentReleases', recentReleases);
		this.setState(() => ({ recentReleases }));
	}
	
	render() {
		const movieList = get(this.state, 'recentReleases.results')
		return (
			<div>
				<MovieGrid movieList={movieList}/>
			</div>
		);
	}
}

RecentReleases.props = {

};

export default RecentReleases;

