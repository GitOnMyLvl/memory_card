function Scoreboard( {currentScore, hightScore}) {
  return (
    <div className="scoreboard">
      <p>Current Score: {currentScore}</p>
      <p>Highest Score: {hightScore}</p>
    </div>
  );
}

export default Scoreboard;