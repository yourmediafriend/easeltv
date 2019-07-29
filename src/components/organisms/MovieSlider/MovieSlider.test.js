import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import '../../../utils/matchMedia.mock';
import MovieSlider from './index';

describe("MovieSlider component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MovieSlider />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
})