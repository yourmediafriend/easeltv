import React from "react";
import PropTypes from "prop-types";
import "./MovieDetailPanel.css";

import TrailerLink from "../../atoms/TrailerLink";

const MovieDetailPanel = props => {
	const {
		backdrop_path,
		overview,
		original_title,
		genres,
		production_countries,
		runtime,
		title,
		release_date,
		movieVideos,
		handleOpenModal
	} = props;


	const backdropSize = "w300";
	const backdropImageUrl = "http://image.tmdb.org/t/p/";

	let year;
	let genre_str;
	let production_countries_str;
	let trailerId;

	if (release_date) {
		year = release_date.split("-")[0];
	}

	// Turn these into utility method
	if (Array.isArray(genres)) {
		genre_str = genres
			.flatMap(({ name }) => {
				return name;
			})
			.join(", ");
	}

	if (Array.isArray(production_countries)) {
		production_countries_str = production_countries
			.flatMap(({ name }) => {
				return name;
			})
			.join(", ");
	}

	if (movieVideos) {
		let trailer = movieVideos.filter(a => a.type === "Trailer");
		if (trailer[0].site === "YouTube") {
			trailerId = trailer[0].key
		}
	}

	return (
		<div className="movie_details">
			{trailerId
				? <div className="trailer_panel">
						<TrailerLink
							trailerImage={`${backdropImageUrl}/${backdropSize}/${backdrop_path}`}
							trailerTitle={title}
							trailerId={trailerId}
							onClick={handleOpenModal}
						/>
					</div>
				: null}
			<div className="details_panel">
				<div className="details_panel_top">
					<div className="movie_detail_panel_top_title title">
						<h2 className="title_main">
							{title}
						</h2>
						{/* 	{original_title!==title ? <h5 className="title_original">{original_title}</h5> : null} */}
					</div>
					<div className="details_panel_top_details">
						<ul>
							{runtime ? <li>{`${runtime} min`}</li> : null}
							{year
								? <li>
										{year}
									</li>
								: null}
							{genre_str
								? <li>
										{genre_str}
									</li>
								: null}
							{production_countries_str
								? <li>
										{production_countries_str}
									</li>
								: null}
						</ul>
					</div>
				</div>
				<div className="details_panel_body">
					<div className="details_panel_body_overview">
						<p>
							{overview}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

MovieDetailPanel.props = {
	movieDetails: PropTypes.object
};

export default MovieDetailPanel;
