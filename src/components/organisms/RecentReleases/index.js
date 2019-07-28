import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { getRecentReleases } from "../../../apis/themoviedbApi";

import MovieGrid from "../MovieGrid";
import MovieDetailPanel from "../MovieDetailPanel";


class RecentReleases extends React.Component {

	constructor(props) {
		super(props);
		this.state={};
		this.updateMoviePanel = this.updateMoviePanel.bind(this);		
	}

    componentDidMount() {
        this.getRecentReleases();
    }

    async getRecentReleases()  {
		const recentReleases = await getRecentReleases();
		this.setState(() => ({ recentReleases }));
	}
	
	updateMoviePanel (movieDetails){
		this.setState(() => ({ movieDetails }));
	}

	render() {
		const movieList = get(this.state, 'recentReleases.results');
		const movieDetails = get(this.state, 'movieDetails');

		return (
			<div>
				<MovieGrid movieList={movieList} updateMoviePanel={this.updateMoviePanel} />
				<MovieDetailPanel {...movieDetails} />
			</div>
		);
	}
}

RecentReleases.props = {

};

export default RecentReleases;

