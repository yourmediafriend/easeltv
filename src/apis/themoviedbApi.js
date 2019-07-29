const movieDBKey = "7a853a18982534324765451949fc1655";
const movieDbDiscoverUrl = "https://api.themoviedb.org/3/discover/movie";
const movieDbMovieUrl = "https://api.themoviedb.org/3/movie";

let language = "en-US";

function getRecentReleases() {
	let current_datetime = new Date();
	let formatted_current_date = `${current_datetime.getFullYear()}-${current_datetime.getMonth()}-${current_datetime.getDate()}`;

	const params = `?api_key=${movieDBKey}&language=${language}&primary_release_date.lte=${formatted_current_date}`;

	const response = fetch(`${movieDbDiscoverUrl}${params}`).then(response =>
		response.json()
	).catch(handleError);

	return response;
}

function getMovieDetails(id) {
	const params = `/${id}?api_key=${movieDBKey}&language=${language}`;

	const response = fetch(`${movieDbMovieUrl}${params}`).then(response =>
		response.json()
	).catch(handleError);

	return response;
}

function getMovieVideos(id) {
	const params = `/${id}/videos?api_key=${movieDBKey}&language=${language}`;

	const response = fetch(`${movieDbMovieUrl}${params}`).then(response =>
		response.json()
	).catch(handleError);

	return response;
}

function handleError(error) {
	console.warn(error);
	return null;
}


export { getRecentReleases, getMovieDetails, getMovieVideos };
