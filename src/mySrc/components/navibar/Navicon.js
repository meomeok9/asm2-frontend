import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Navicon.css";

const Navicon = (props) => {
  switch (props.name) {
    case "faBed": {
      return <FontAwesomeIcon className={`nav_icon`} icon={faBed} />;
    }
    case "faPlane": {
      return <FontAwesomeIcon className={`nav_icon`} icon={faPlane} />;
    }
    case "faCar": {
      return <FontAwesomeIcon className={`nav_icon`} icon={faCar} />;
    }
    case "faTaxi": {
      return <FontAwesomeIcon className={`nav_icon`} icon={faTaxi} />;
    }
    case "faLocationDot": {
      return <FontAwesomeIcon className={`nav_icon`} icon={faLocationDot} />;
    }
    default:
      return <FontAwesomeIcon className={`nav_icon`} icon={faBed} />;
  }
};
export default Navicon;
