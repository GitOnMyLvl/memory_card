function Info({ toggleInfo }) {
  return (
    <div className="overlay">
      <div className="info">
        <h3>Info</h3>
        <p>
          Click on a card and remember the Pokemon.
          <br />
          If you click on the same Pokemon twice, you lose.
          <br />
          After you board, a new one with five more cards will appear. <br />
          Have fun and try to get a good high score!
        </p>
        <button className="close-info-btn" onClick={toggleInfo}>Close</button>
      </div>
    </div>
  );
}

export default Info;
