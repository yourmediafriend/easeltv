import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import { getMovieDetails, getMovieVideos } from "../../../apis/themoviedbApi";
import './MovieSliderItem.css'

class MovieSliderItem extends React.Component {

	constructor(props) {
		super(props);
		this.state={};
		this.handleClickEvent = this.handleClickEvent.bind(this);		
	}

	async getMovieDetails() {
		const movieDetails = await getMovieDetails(this.props.id);
		const movieVideos = await getMovieVideos(this.props.id);
	
		this.setState(() => ({ movieDetails, movieVideos }));
		this.props.updateMoviePanel(movieDetails, movieVideos);
	}

	handleClickEvent = e => {
		if(!(this.state.movieDetails)){
			this.getMovieDetails();
		}
		else {
			this.props.updateMoviePanel(this.state.movieDetails, this.state.movieVideos);
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

MovieSliderItem.props = {
	title: PropTypes.string,
	poster_path: PropTypes.string,
	updateMoviePanel: PropTypes.function,
};

export default MovieSliderItem;
