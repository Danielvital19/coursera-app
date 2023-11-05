// import "./Footer.scss";
// import footerLogo from "../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const handleScroll = () => {
    const ele = document.querySelector("#about");
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-logo">
            <img src="" alt="Little Lemon Logo" />
          </div>
          <div className="footer-items">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/"> Home</a>
              </li>
              <li>
                <a href="/" onClick={handleScroll}>
                  About
                </a>
              </li>
              <li>
                <a href="/404">Menu</a>
              </li>
              <li>
                <a href="/reservation">Reservation</a>
              </li>
              <li>
                <a href="/404">Login</a>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <h3>Contact</h3>
            <p>
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              Jublee Hills, Hyderabad.
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              (+91) XXXXX84223
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              contact@littlelemon.com
            </p>
            <div className="div"></div>
          </div>
          <div className="footer-items">
            <h3>Connect with us</h3>
            <div className="socials">
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
      </div>
    </footer>
  );
};

export default Footer;