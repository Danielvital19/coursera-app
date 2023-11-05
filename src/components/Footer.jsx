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
            <h4>Navigate</h4>
            <div>
              <a href="/"> Home</a>
            </div>
            <div>
              <a href="/">About</a>
            </div>
            <div>
              <a href="/">Menu</a>
            </div>
            <div>
              <a href="/">Reservation</a>
            </div>
            <div>
              <a href="/">Login</a>
            </div>
          </div>
          <div className="navigate-section">
            <h4>Contact us</h4>
            <div>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
                +13125881287
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              520 Michigan Ave, Chicago, IL 60605, Estados Unidos
            </div>
            <div>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              support@littlelemon.com
            </div>
          </div>
          <div className="navigate-section">
            <h4>Find us in:</h4>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;