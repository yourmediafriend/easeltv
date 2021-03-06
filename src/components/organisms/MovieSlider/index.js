import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieSlider.css";

import MovieSliderItem from "../../molecules/MovieSliderItem";

const slickSettings = () => {
	return {
		dots: true,
		autoplay: false,
		autoplaySpeed: 5000,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: true,
		adaptiveHeight: false
	};
};

const MovieSlider = props => {
	const { movieList, updateMoviePanel } = props;

	return (
		<div className={"movie_slider_container"}>
			<Slider className={"movie_slider"} {...slickSettings()}>
				{Array.isArray(movieList)
					? movieList.map((e, i) => {
							return (
								<div className="movie_slider_item" key={i}>
									<MovieSliderItem {...e} updateMoviePanel={updateMoviePanel} />
								</div>
							);
						})
					: <div>Loading Movies...</div>}
			</Slider>
		</div>
	);
};

MovieSlider.props = {
	movieList: PropTypes.object,
	updateMoviePanel: PropTypes.function
};

export default MovieSlider;
