import { useState } from 'react';
import GameArea from './components/GameArea';
import Scoreboard from './components/Scoreboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import './styles/App.css'

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem('highScore');
    return storedHighScore ? parseInt(storedHighScore) : 0;
  });

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  }

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
      <Header toggleInfo={toggleInfo}/>
      {showInfo && <Info />}
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <GameArea incrementScore={incrementScore} setCurrentScore={setCurrentScore}/>
      <Footer />
    </>
  )
}

export default App
