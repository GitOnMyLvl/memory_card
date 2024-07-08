import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Scoreboard from "./Scoreboard";

function Header ({toggleInfo, currentScore, highScore}){
 return(
    <header>
      <h2>Pokemon Memory Card</h2>
      <div className="header-right">
        <Scoreboard currentScore={currentScore} highScore={highScore} />
        <FontAwesomeIcon icon={faInfoCircle} onClick={toggleInfo} size="2x" cursor="pointer"/>
      </div>
      
    </header>
  )
}

export default Header;