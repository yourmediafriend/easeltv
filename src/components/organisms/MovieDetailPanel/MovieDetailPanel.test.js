import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import MovieDetailPanel from './index';

describe("MovieDetailPanel component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MovieDetailPanel />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
})