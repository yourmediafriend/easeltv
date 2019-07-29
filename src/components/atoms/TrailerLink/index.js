import React from "react";
import "./TrailerLink.css";

class TrailerLink extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickEvent = this.handleClickEvent.bind(this);
	}

    handleClickEvent() {
        const {  Trailertitle, TrailerUrl, onClick } = this.props;
        onClick(Trailertitle, TrailerUrl);
    }

	render() {
		const { TrailerImage, Trailertitle, TrailerUrl, onClick } = this.props;
		return (
			<div className="link_container" onClick={this.handleClickEvent}>
				<img src={TrailerImage} alt="" />
			</div>
		);
	}
}

TrailerLink.props = {};

export default TrailerLink;
