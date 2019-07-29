import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import MovieSliderItem from './index';

describe("MovieSliderItem component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MovieSliderItem />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
})