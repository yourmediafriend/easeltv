import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeEmbed from './index';

describe("YouTubeEmbed component", () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<YouTubeEmbed />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

})