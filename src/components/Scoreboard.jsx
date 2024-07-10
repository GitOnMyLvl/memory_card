function Scoreboard( {currentScore, highScore}) {
  return (
    <div className="scoreboard">
      <p className="score">Current Score: <span>{currentScore}</span></p>
      <p className="score">High Score: <span>{highScore}</span></p>
    </div>
  );
}

export default Scoreboard;