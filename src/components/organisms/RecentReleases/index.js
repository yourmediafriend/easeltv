import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { getRecentReleases } from "../../../apis/themoviedbApi";

import MovieSlider from "../MovieSlider";
import MovieDetailPanel from "../MovieDetailPanel";
import TrailerModal from "../TrailerModal";
import YouTubeEmbed from "../../atoms/YouTubeEmbed";

class RecentReleases extends React.Component {

	constructor(props) {
		super(props);
		this.state={};
		this.updateMoviePanel = this.updateMoviePanel.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);	
		this.handleCloseModal = this.handleCloseModal.bind(this);			
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

	handleOpenModal (trailerTitle, trailerId){
		this.setState(() => ({ modalOpen: true, trailerTitle, trailerId }));
	}

	handleCloseModal (){
		this.setState(() => ({ modalOpen: false }));
	}

	render() {
		const movieList = get(this.state, 'recentReleases.results');
		const movieDetails = get(this.state, 'movieDetails');
		const movieVideos = get(this.state, 'movieVideos.results');

		return (
			<div>
				<MovieSlider movieList={movieList} updateMoviePanel={this.updateMoviePanel}  />
				<MovieDetailPanel {...movieDetails} movieVideos={movieVideos} handleOpenModal={this.handleOpenModal}/>
				<TrailerModal  modalOpen={this.state.modalOpen} handleCloseModal={this.handleCloseModal}>
					{this.state.modalOpen ? <YouTubeEmbed trailerId={this.state.trailerId } autoplay={true} allowfullscreen={true} /> : null}
				</TrailerModal>
			</div>
		);
	}
}

RecentReleases.props = {

};

export default RecentReleases;

