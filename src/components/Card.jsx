import { useEffect } from "react";
import { useState } from "react";
import fetchData from "./fetchData";

function Card( { pokemonNumber }){
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    let ignore = false;
    fetchData(pokemonNumber).then(result => {
      if (!ignore){
        console.log('Fetching data');
        setPokemonName(result.name);
        setPokemonImage(result.image);
      }
    });
    return () => {
      ignore = true;
    }
  }, [pokemonNumber]);

  return(
    <div className="card">
      <button type="button" className="clickable-card"> 
        <h3>{ pokemonName }</h3>
        <img src={pokemonImage} alt={pokemonName} />
      </button>
    </div>
  )
}

export default Card;
