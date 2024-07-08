function EndScreen ({ restart }) {
  return (
    <div className="game-over-screen">
      <h1>Game Over</h1>
      <button onClick={restart} className="restart-btn">Restart</button>
    </div>
   ) 
}

export default EndScreen;