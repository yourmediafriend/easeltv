import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import YouTubeEmbed from './index';

describe("YouTubeEmbed component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<YouTubeEmbed />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

})