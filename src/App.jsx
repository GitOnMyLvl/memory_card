import { useState } from 'react';
import GameArea from './components/GameArea';
import Scoreboard from './components/Scoreboard';
import './styles/App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const incrementScore = () => {
    setCurrentScore(currentScore + 1);
  }
  
  return (
    <>
      <Scoreboard currentScore={currentScore} />
      <GameArea incrementScore={incrementScore} setCurrentScore={setCurrentScore}/>
    </>
  )
}

export default App
