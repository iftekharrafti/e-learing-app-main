import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "./MainNavbar.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faSnapchat,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image className="logo" src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link>
              <Link className="text-black text-decoration-none" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black text-decoration-none" to="/courses">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black text-decoration-none" to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-black text-decoration-none"
                to="/instructors"
              >
                Instructors
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black text-decoration-none" to="/notice">
                Notice
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black text-decoration-none" to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-black text-decoration-none" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          <div className="mainTopNav">
            <div className="d-flex flex-wrap py-2 contact">
              <div className="d-flex align-items-center me-3">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faPhone}
                ></FontAwesomeIcon>
                <p className="m-0">0186947526</p>
              </div>
              <span> | </span>
              <div className="d-flex align-items-center ms-3">
                <FontAwesomeIcon
                  className="me-2"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                <p className="m-0">Hello@gmail.com</p>
              </div>
            </div>
            <div className="me-5">
              <a
                className="me-2"
                href="https://www.facebook.com/iftekhar.rafti"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="me-2" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="me-2" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="me-2" href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="me-2" href="https://www.youtube.com">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a className="me-2" href="https://www.skype.com">
                <FontAwesomeIcon icon={faSkype} />
              </a>
              <a className="me-2" href="https://www.snapchat.com">
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
