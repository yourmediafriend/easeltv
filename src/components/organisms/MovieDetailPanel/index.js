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


			{Array.isArray(genres) ?
				<ul>
					{genres.map((e,i)=>{
						return(
							<li>{e}</li>
						)
					})}
				</ul> : null}
			


*/


const MovieDetailPanel = props => {

	const { overview,  original_title, genres, runtime, title, } = props;
	
	return (
		<div className="movie_detail_panel">
			<h2>{title}</h2>
			{original_title!==title ? <h5>{original_title}</h5> : null}
			
			<p>{runtime} min</p>
		
			<p>{overview}</p>



		</div>
	);
};

MovieDetailPanel.props = {
    movieDetails: PropTypes.object
};

export default MovieDetailPanel;
