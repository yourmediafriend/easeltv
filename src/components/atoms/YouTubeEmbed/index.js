import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import "./YouTubeEmbed.css";

class YouTubeEmbed extends React.Component {
	render() {

		const { trailerId } = this.props;

		const opts = {
			playerVars: {
				autoplay: 1
			}
		};

		return <YouTube className="youtube_container" videoId={trailerId}  opts={opts}/>;
	}
}

YouTubeEmbed.props = {
	trailerId: PropTypes.string,
};

export default YouTubeEmbed;
