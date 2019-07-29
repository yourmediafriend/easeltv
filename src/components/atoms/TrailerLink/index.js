import React from "react";
import PropTypes from "prop-types";
import "./TrailerLink.css";

class TrailerLink extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickEvent = this.handleClickEvent.bind(this);
	}

    handleClickEvent() {
        const {  trailerTitle, trailerId, onClick } = this.props;
        onClick(trailerTitle, trailerId);
    }

	render() {
		const { trailerImage } = this.props;
		return (
			<div className="link_container" onClick={this.handleClickEvent}>
				<img src={trailerImage} alt="" />
				<div className="link_container_overlay" />
			</div>
		);
	}
}

TrailerLink.props = {
	trailerImage: PropTypes.string,
	trailerId: PropTypes.string,
	trailerTitle: PropTypes.string,
	onClick: PropTypes.function,
};

export default TrailerLink;
