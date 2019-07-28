import React from "react";
import PropTypes from "prop-types";
import "./MovieDetailPanel.css";

/* 
adult: false
backdrop_path: "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg"
belongs_to_collection: {id: 531241, name: "Spider-Man (Avengers) Collection", poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg", backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg"}
budget: 160000000
genres: (3) [{…}, {…}, {…}]
homepage: "https://www.marvel.com/movies/spider-man-far-from-home"
id: 429617
imdb_id: "tt6320628"
original_language: "en"
original_title: "Spider-Man: Far from Home"
overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent."
popularity: 254.42
poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg"
production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2019-06-28"
revenue: 982052266
runtime: 129
spoken_languages: (4) [{…}, {…}, {…}, {…}]
status: "Released"
tagline: ""
title: "Spider-Man: Far from Home"
video: false
vote_average: 7.8
vote_count: 2494 


*/

const MovieDetailPanel = props => {
	console.log(props);

	const {
		overview,
		original_title,
		genres,
		production_countries,
		runtime,
		title,
		release_date
	} = props;

	let year;

	if (release_date) {
		year = release_date.split("-")[0];
	}

	return (
		<div className="movie_detail_panel">
			<div className="movie_detail_panel_top">
				<div className="movie_detail_panel_top_title title">
					<h2 className="title_main">
						{title}
					</h2>
					{/* 	{original_title!==title ? <h5 className="title_original">{original_title}</h5> : null} */}
				</div>
				<div className="movie_detail_panel_top_details">
					<ul>
						{runtime ? <li>{`${runtime} min`}</li> : null}
						{year
							? <li>
									{year}
								</li>
							: null}
						{Array.isArray(genres)
							? <li>
									<ul>
										{genres.map((e, i) => {
											return (
												<li>
													{e.name}
												</li>
											);
										})}
									</ul>
								</li>
							: null}
						{Array.isArray(production_countries)
							? <li>
									<ul>
										{production_countries.map((e, i) => {
											return (
												<li>
													{e.iso_3166_1}
												</li>
											);
										})}
									</ul>
								</li>
							: null}
						
					</ul>
				</div>
			</div>

			<p>
				{overview}
			</p>
		</div>
	);
};

MovieDetailPanel.props = {
	movieDetails: PropTypes.object
};

export default MovieDetailPanel;
