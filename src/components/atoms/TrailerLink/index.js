import React from "react";
import "./TrailerLink.css";

const TrailerLink = props => {

    const {TrailerImage, Trailertitle, TrailerUrl} = props;


	return (

        <div className="link_container" onClick>
			<img src={TrailerImage} alt="" />

        </div>

	);
};

export default TrailerLink;
