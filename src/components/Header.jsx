import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Header ({toggleInfo}){
 return(
    <header>
      <h1>Pokemon Memory Card</h1>
      <button type="button" className="info-btn" onClick={toggleInfo}>
        <FontAwesomeIcon icon={faInfoCircle}/>
      </button>
    </header>
  )
}

export default Header;