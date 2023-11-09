import "./Footer.css";
import logo from '../images/Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
        <div className="footer">
          <img src={logo} alt="Little Lemon Logo" />
          <div className="navigate-section">
            <h4>Contact us: </h4>
            <div className="navigate-section-item">
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
                +13125881287
            </div>
            <div className="navigate-section-item">
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              520 Michigan Ave, Chicago, IL 60605, Estados Unidos
            </div>
            <div className="navigate-section-item">
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              support@littlelemon.com
            </div>
          </div>
          <div className="navigate-section">
            <h4>Find us in:</h4>
            <div className="navigate-section-item">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="navigate-section-item">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="navigate-section">
            <h4>Navigate</h4>
            <div className="navigate-section-item">
              <a href="/"> Home</a>
            </div>
            <div className="navigate-section-item">
              <a href="/">About</a>
            </div >
            <div className="navigate-section-item">
              <a href="/">Menu</a>
            </div>
            <div className="navigate-section-item">
              <a href="/">Reservation</a>
            </div>
            <div className="navigate-section-item">
              <a href="/">Login</a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;