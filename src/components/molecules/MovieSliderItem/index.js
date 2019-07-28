import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { getMovieDetails } from "../../../apis/themoviedbApi";
import './MovieSliderItem.css'


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
		this.state={};
		this.handleClickEvent = this.handleClickEvent.bind(this);		
	}

	async getMovieDetails() {
		const movieDetails = await getMovieDetails(this.props.id);
		this.setState(() => ({ movieDetails }));
		this.props.updateMoviePanel(movieDetails);
	}

	handleClickEvent = e => {
		// if the state 
		if(!(this.state.movieDetails)){
			this.getMovieDetails();
		}
		else {
			this.props.updateMoviePanel(this.state.movieDetails);
		}
	};

	render() {
		let posterBaseUrl = "http://image.tmdb.org/t/p/";
		let posterWidth = "300";

		const { title, poster_path } = this.props;

		return (
			<div onClick={this.handleClickEvent} className='movie_card'>
				<img src={`${posterBaseUrl}w${posterWidth}/${poster_path}`} className='movie_card_poster_img'/>
				<div className={'movie_card_details'}>
					{title}
				</div>
			</div>
			
		);
	}
}

MovieGridItem.props = {};

export default MovieGridItem;
