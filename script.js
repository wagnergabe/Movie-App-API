const apiKey = "499a2abaee32d4aedc7f28b9b358ef99";
const api_url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const img_path = `https://image.tmdb.org/t/p/w1280`;
const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="`;
const config = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};



const form = document.getElementById("form");
const search = document.getElementById("search");

// getMovies(api_url);

async function getMovies(url) {
  const response = await fetch(url, config);
  const data = await response.json();
  console.log(data);
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(search_url + searchTerm)

    search.value = ''
  } else {
    window.location.reload();
  }
});
