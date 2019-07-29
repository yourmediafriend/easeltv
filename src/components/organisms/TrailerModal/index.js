import React from "react";
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
	}

	componentWillReceiveProps(nextProps, nextContext) {

		if (nextProps.modalOpen && !(this.state.open)) {
			this.setState({
				open: true
			});
		}

	}

	render() {
		return (
			<div
				className={`modal_container ${this.state.open
					? "modal_container--active"
					: null}`}
			>
				<a href="#" onClick={this.handleCloseEvent}>
					X
				</a>
				Modal Content
			</div>
		);
	}
}

Modal.props = {};

export default Modal;
