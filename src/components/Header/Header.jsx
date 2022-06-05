import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='HeaderList'>
          <div className='HeaderListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
          </div>
          <div className='HeaderListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='HeaderListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='HeaderListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='HeaderListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className='headerTitle'>Book your next Experience!</h1>
        <p className='headerDesc'>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free BookmyTrip Account!
        </p>
        <button className='headerBtn'>sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;
