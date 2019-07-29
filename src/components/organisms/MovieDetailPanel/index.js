import React from "react";
import PropTypes from "prop-types";
import "./MovieDetailPanel.css";

import TrailerLink from "../../atoms/TrailerLink";

/* 

7a853a18982534324765451949fc1655

299534

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


## Add Supported Image Sizes  
                                 Min Res      Max Res  
poster   = Poster ............  500 x 750   2000 x 3000  
backdrop = Fanart ............ 1280 x 720   3840 x 2160  
still    = TV Show Episode ... 1280 x 720   3840 x 2160  
profile  = Actors Actresses ..  300 x 450   2000 x 3000  
logo     = TMDb Logo  

## API Supported Image Sizes  

|  poster  | backdrop |  still   | profile  |   logo   |
| :------: | :------: | :------: | :------: | :------: |
| -------- | -------- | -------- |    w45   |    w45   |
|    w92   | -------- |    w92   | -------- |    w92   |
|   w154   | -------- | -------- | -------- |   w154   |
|   w185   | -------- |   w185   |   w185   |   w185   |
| -------- |   w300   |   w300   | -------- |   w300   |
|   w342   | -------- | -------- | -------- | -------- |
|   w500   | -------- | -------- | -------- |   w500   |
| -------- | -------- | -------- |   h632   | -------- |
|   w780   |   w780   | -------- | -------- | -------- |
| -------- |  w1280   | -------- | -------- | -------- |
| original | original | original | original | original |  

Original Size is the size of the uploaded image.  
It can be between Minimum Resolution and Maximum Resolution.  

http://image.tmdb.org/t/p/original//dihW2yTsvQlust7mSuAqJDtqW7k.jpg
*/

const MovieDetailPanel = props => {

	console.log(props)

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
	} = props;

	const youTubeUrl = "https://www.youtube.com/watch";
	const backdropSize = "w300";
	const backdropImageUrl = 'http://image.tmdb.org/t/p/';

	let year;
	let genre_str;
	let production_countries_str;
	let trailerUrl;

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
		
		let trailer = movieVideos.filter(a => a.type==='Trailer');

		if (trailer[0].site === 'YouTube') {
			let params = `?v=${trailer[0].key}`
			trailerUrl = `${youTubeUrl}${params}`
		}

		console.log(trailer)
		console.log(trailerUrl)
	
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
			<div className="movie_detail_panel_body">

				{trailerUrl ? <TrailerLink TrailerImage={`${backdropImageUrl}/${backdropSize}/${backdrop_path}`} Trailertitle={title} TrailerUrl={trailerUrl} /> : null }
	
				<div className="movie_detail_panel_body_overview">
					<p>
						{overview}
					</p>
				</div>


			</div>
		</div>
	);
};

MovieDetailPanel.props = {
	movieDetails: PropTypes.object
};

export default MovieDetailPanel;
