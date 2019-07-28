import React from "react";
import PropTypes from "prop-types";

import { getMovieDetails } from "../../../apis/themoviedbApi";

/* 
	adult: false
	backdrop_path: "/wf6VDSi4aFCZfuD8sX8JAKLfJ5m.jpg"
	genre_ids: (5) [16, 28, 18, 9648, 35]
	id: 566555
	original_language: "ja"
	original_title: "名探偵コナン 紺青の拳（フィスト）"
	overview: "23rd movie in the "Detective Conan" franchise."
	popularity: 275.59
	poster_path: "/86Y6qM8zTn3PFVfCm9J98Ph7JEB.jpg"
	release_date: "2019-04-12"
	title: "Detective Conan: The Fist of Blue Sapphire"
	video: false
	vote_average: 5
	vote_count: 25 
*/

class MovieGridItem extends React.Component {

	constructor(props) {
		super(props);
		this.handleClickEvent = this.handleClickEvent.bind(this);
	}

	async getMovieDetails() {
		const movieDetails = getMovieDetails(this.props.id);

		console.log("getMovieDetails", movieDetails);
		this.setState(() => ({ movieDetails }));
	}

	handleClickEvent = e => {
		this.getMovieDetails();
	};

	render() {
		let posterBaseUrl = "http://image.tmdb.org/t/p/";
		let posterWidth = "300";

		const { title, poster_path } = this.props;
		return (
			<div onClick={this.handleClickEvent}>
				<img src={`${posterBaseUrl}w${posterWidth}/${poster_path}`} />
				{title}
			</div>
		);
	}
}

MovieGridItem.props = {};

export default MovieGridItem;
