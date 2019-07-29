import React from "react";
import YouTube from "react-youtube";

import "./YouTubeEmbed.css";

class YouTubeEmbed extends React.Component {
	render() {
		const youTubeEmbed = "https://www.youtube.com/embed/";

		const { trailerId, autoplay } = this.props;

		const opts = {
			playerVars: {
				autoplay: 1
			}
		};

		return <YouTube className="youtube_container" videoId={trailerId}  opts={opts}/>;
	}
}

YouTubeEmbed.props = {};

export default YouTubeEmbed;
