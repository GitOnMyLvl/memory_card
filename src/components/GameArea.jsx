import { useEffect, useState } from 'react';
import Card from './Card';
import getRandomUniqueNumbers from './getRandomUniqueNumbers';

function GameArea() {

  const [randomNumber, setRandomNumbers] = useState([]);
  useEffect(()=> {
    const numbers = getRandomUniqueNumbers(1, 1025, 10)
    setRandomNumbers(numbers);
  }, []);


  return (
    
    <div className='card-container'>
      {randomNumber.map((number, index) => (
        <Card key={index} pokemonNumber={number} />
      ))}
    </div>
  )
}

export default GameArea