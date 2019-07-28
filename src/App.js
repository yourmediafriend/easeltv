import React from "react";

import Page from "./components/layout/Page";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import RecentReleases from "./components/organisms/RecentReleases";

function App() {
	return (
		<Page>
			<Header pageTitle={'New Releases'}/>
			<RecentReleases />
			<Footer />
		</Page>
	);
}

export default App;
