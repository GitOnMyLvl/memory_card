function capitalizeLetters(text){
  text = text.charAt(0).toUpperCase() + text.slice(1);
  return text.replace(/-([a-z])/g, function (match, letter){
    return " " + letter.toUpperCase();
  })
}

const fetchData = async (pokemonNumber) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
  const data = await response.json();
  return{
    name: capitalizeLetters(data.species.name),
    image: data.sprites.front_default
  }
}

export default fetchData;
