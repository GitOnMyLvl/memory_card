import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card'
import getRandomUniqueNumbers from './components/getRandomUniqueNumbers';

function App() {
  const [randomNumber, setRandomNumbers] = useState([]);
  const [count, setCount] = useState(10);
  useEffect(()=> {
    const numbers = getRandomUniqueNumbers(1, 1025, count)
    setRandomNumbers(numbers);
  }, []);

  return (
    <>
      <div className='card-container'>
        {randomNumber.map((number, index) => (
          <Card key={index} pokemonNumber={number} />
        ))}
      </div>
    </>
  )
}

export default App
