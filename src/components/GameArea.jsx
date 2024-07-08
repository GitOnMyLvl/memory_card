import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import getRandomUniqueNumbers from "../functions/getRandomUniqueNumbers";
import EndScreen from "./EndScreen";

function GameArea({ incrementScore, setCurrentScore }) {
  const [randomNumber, setRandomNumbers] = useState([]);
  const [isGameOver, setGameOver] = useState(false);
  const clickedCards = useRef(new Set());
  let cardNumber = 5;

  useEffect(() => {
    const numbers = getRandomUniqueNumbers(1, 1025, cardNumber);
    setRandomNumbers(numbers);
  }, [cardNumber]);

  const shuffleCards = () => {
    setRandomNumbers((prevNumbers) =>
      [...prevNumbers].sort(() => Math.random() - 0.5)
    );
  };

  const resetCards = () => {
    const numbers = getRandomUniqueNumbers(1, 1025, cardNumber);
    setRandomNumbers(numbers);
    clickedCards.current.clear();
  };

  const resetGame = () => {
    cardNumber = 5;
    setCurrentScore(0);
    resetCards();
    setGameOver(false);
  };

  const handleClickedCards = (number) => {
    clickedCards.current.add(number);
    if (clickedCards.current.size === randomNumber.length) {
      cardNumber += 5;
      resetCards();
    }
  };

  return (
    <div className="game-container">
      
      {isGameOver ? (
        <div className="end-screen">
          <EndScreen restart={resetGame}/> 
        </div>
      )
      :(
        <div className="card-container">
        {randomNumber.map((number) => (
          <Card
            key={number}
            pokemonNumber={number}
            shuffle={shuffleCards}
            resetCards={resetCards}
            resetGame={resetGame}
            incrementScore={incrementScore}
            handleClickedCards={handleClickedCards}
            setGameOver={setGameOver}
          />
        ))}
      </div>
      )
      }
    </div>
  );
}

export default GameArea;
