import { useEffect, useState } from 'react';
import Card from './Card';
import getRandomUniqueNumbers from '../functions/getRandomUniqueNumbers';

function GameArea() {

  const [randomNumber, setRandomNumbers] = useState([]);

  useEffect(()=> {
    const numbers = getRandomUniqueNumbers(1, 1025, 10)
    setRandomNumbers(numbers);
  }, []);

  const shuffleCards = () => {
    setRandomNumbers(prevNumbers => [...prevNumbers].sort(() => Math.random() - 0.5));
  }


  return (
    
    <div className='card-container'>
      {randomNumber.map((number) => (
        <Card key={number} pokemonNumber={number} shuffle={shuffleCards}/>
      ))}
    </div>
  )
}

export default GameArea