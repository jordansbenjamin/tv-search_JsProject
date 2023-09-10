const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
	e.preventDefault();
	console.log("SUBMITTED!");
	// console.dir(form.elements.query.value);
	// The same as above
	// console.dir(this.elements.query.value);
	const searchTerm = this.elements.query.value;

	// using axios in replace of fetch so JSON is automatically parsed
	// const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

	// Another way of adding dynamic query strings with axios
	const config = { params: { q: searchTerm } };
	const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
	// console.log(response.data[0].show.image.medium);
	// const img = document.createElement('img');
	// img.src = response.data[0].show.image.medium;
	// document.body.append(img);
	makeImages(response.data);
	form.elements.query.value = "";
});

const makeImages = (shows) => {
	for (let result of shows) {
		console.log(result);
		if (result.show.image) {
			const img = document.createElement("img");
			img.src = result.show.image.medium;
			document.body.append(img);
		}
	}
};
