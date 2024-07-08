import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function Header ({toggleInfo}){
 return(
    <header>
      <h2>Pokemon Memory Card</h2>
      <FontAwesomeIcon icon={faInfoCircle} onClick={toggleInfo} size="2x" cursor="pointer"/>
    </header>
  )
}

export default Header;