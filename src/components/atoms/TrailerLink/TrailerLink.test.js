import React from 'react';
import ReactDOM from 'react-dom';
import TrailerLink from './index';

describe("TrailerLink component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<TrailerLink />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
})