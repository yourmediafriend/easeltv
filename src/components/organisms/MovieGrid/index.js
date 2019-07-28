import React from "react";
import PropTypes from "prop-types";
import "./MovieGrid.css";

import MovieGridItem from '../../molecules/MovieGridItem';

const MovieGrid = props => {

    const { movieList, updateMoviePanel } = props;
	return (
		<ul className="moviegrid">
			{Array.isArray(movieList) ? movieList.map((e, i) => {
                return <li className="moviegrid_item" key={i} ><MovieGridItem {...e} updateMoviePanel={updateMoviePanel}/></li>
                
            }) : <li>No Movies</li>}
		</ul>
	);
};
MovieGrid.props = {
    movieList: PropTypes.object
};

export default MovieGrid;
