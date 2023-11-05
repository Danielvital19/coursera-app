import "./Footer.css";
import logo from '../images/Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleScroll = () => {
    const ele = document.querySelector("#about");
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
        <div className="footer">
          <img src={logo} alt="Little Lemon Logo" />
          <div>
            <p>Navigate</p>
            <ul>
              <li>
                <a href="/"> Home</a>
              </li>
              <li>
                <a href="/">
                  About
                </a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/">Reservation</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </div>
          <div>
            <p>Contact us</p>
            <p>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
                +13125881287
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              520 Michigan Ave, Chicago, IL 60605, Estados Unidos
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              support@littlelemon.com
            </p>
          </div>
          <div>
            <p>Find us in:</p>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
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