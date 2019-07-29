import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { getRecentReleases } from "../../../apis/themoviedbApi";

import MovieSlider from "../MovieSlider";
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
	
	updateMoviePanel (movieDetails, movieVideos){
		this.setState(() => ({ movieDetails, movieVideos }));
	}

	render() {
		const movieList = get(this.state, 'recentReleases.results');
		const movieDetails = get(this.state, 'movieDetails');
		const movieVideos = get(this.state, 'movieVideos.results');

		return (
			<div>
				<MovieSlider movieList={movieList} updateMoviePanel={this.updateMoviePanel} />
				<MovieDetailPanel {...movieDetails} movieVideos={movieVideos} />
			</div>
		);
	}
}

RecentReleases.props = {

};

export default RecentReleases;

