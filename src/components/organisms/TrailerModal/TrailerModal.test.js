import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import TrailerModal from './index';

describe("TrailerModal component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<TrailerModal />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
})