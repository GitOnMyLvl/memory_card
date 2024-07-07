const fetchData = async (pokemonNumber) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
  const data = await response.json();
  return{
    name: data.name,
    image: data.sprites.front_default
  }
}

export default fetchData;
