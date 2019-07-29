import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import '../../../utils/matchMedia.mock';
import RecentReleases from './index';

describe("RecentReleases component", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<RecentReleases />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
})