function EndScreen ({ restart }) {
  return (
    <div className="game-over-screen">
      <h2>Game Over</h2>
      <button onClick={restart} className="restart-btn">Restart</button>
    </div>
   ) 
}

export default EndScreen;