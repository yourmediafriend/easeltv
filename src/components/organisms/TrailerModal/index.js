import React from "react";
import PropTypes from "prop-types";
import "./TrailerModal.css";

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleCloseEvent = this.handleCloseEvent.bind(this);
	}

	handleCloseEvent(e) {
		e.preventDefault();
		this.setState({
			open: false
		});
		this.props.handleCloseModal();
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.modalOpen && !(this.state.open)) {
			this.setState({
				open: true
			});
		}
	}

	render() {

		const {children} = this.props;
		return (
			<div
				className={`modal_container ${this.state.open
					? "modal_container--active"
					: null}`}
			>
				<header className="modal_header" >
					<div className="close_button" onClick={this.handleCloseEvent} >
						<span>Close</span>
					</div>
				</header>
				{children}
			</div>
		);
	}
}

Modal.props = {
	children: PropTypes.object
};

export default Modal;
