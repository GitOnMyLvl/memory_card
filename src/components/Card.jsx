import { useEffect } from "react";
import { useState } from "react";
import fetchData from "../functions/fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Card({ pokemonNumber, shuffle, reset, incrementScore }) {
  const [pokemonData, setPokemonData] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetchData(pokemonNumber).then((result) => {
      if (!ignore) {
        console.log("Fetching data");
        setPokemonData(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [pokemonNumber]);

  function handleReset() {
    setIsClicked(false);
    reset();
  }

  function handleClick() {
    if (isClicked) handleReset();
    else{
      incrementScore();
      setIsClicked(true);
      shuffle();
    }
  }

  return (
    <div className="card">
      <button type="button" className="clickable-card" onClick={handleClick}>
        {pokemonData ? (
          <>
            <p>{pokemonData.name}</p>
            <img src={pokemonData.image} alt={pokemonData.name} />
          </>
        ) : (
          <>
            <p>loading</p>
            <FontAwesomeIcon icon={faSpinner} spin />
          </>
        )}
      </button>
    </div>
  );
}

export default Card;
