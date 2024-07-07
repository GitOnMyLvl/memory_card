import { useEffect } from "react";
import { useState } from "react";
import fetchData from "./fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


function Card( { pokemonNumber }){
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetchData(pokemonNumber).then(result => {
      if (!ignore){
        console.log('Fetching data');
        setPokemonName(result.name);
        setPokemonImage(result.image);
        setIsLoading(false)
      }
    });
    return () => {
      ignore = true;
    }
  }, [pokemonNumber]);

  return(
    <div className="card">
      <button type="button" className="clickable-card">
        {isLoading ? (
          <>
            <p>loading</p>
            <FontAwesomeIcon icon={faSpinner} spin/>
          </>
        ):(
          <>
            <p>{ pokemonName }</p>
            <img src={pokemonImage} alt={pokemonName} />
          </>
        )
        
        } 
       
      </button>
    </div>
  )
}

export default Card;
