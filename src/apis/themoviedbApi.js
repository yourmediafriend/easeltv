const movieDBKey = "7a853a18982534324765451949fc1655";
const movieDbDiscover = "https://api.themoviedb.org/3/discover/movie";


async function getRecentReleases() {

    let current_datetime = new Date();
    let formatted_current_date =  `${current_datetime.getFullYear()}-${current_datetime.getMonth()}-${current_datetime.getDate()}`           

    const params = `?api_key=${movieDBKey}&primary_release_date.lte=${formatted_current_date}`;

	const response = await fetch(
		`${movieDbDiscover}${params}`
	);

	return response.json;
}

export default getRecentReleases;
