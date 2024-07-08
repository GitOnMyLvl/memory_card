import { useState } from 'react';
import GameArea from './components/GameArea';
import Scoreboard from './components/Scoreboard';
import './styles/App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem('highScore');
    return storedHighScore ? parseInt(storedHighScore) : 0;
  });

  const incrementScore = () => {
    setCurrentScore(prevScore => {
      const newScore = prevScore + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('highScore', newScore.toString());
      }
      return newScore;
    });
  }
  
  return (
    <>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <GameArea incrementScore={incrementScore} setCurrentScore={setCurrentScore}/>
    </>
  )
}

export default App
