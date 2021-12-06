async function fetchApi() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const dataPlanets = await response.json();
  return dataPlanets.results;
}

export default fetchApi;
