import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-white.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faSnapchat,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div style={{ background: "#021D3A", padding: "70px 0" }}>
        <Container>
          <Row>
            <Col md={3} sm={6} xs={12}>
              <Image src={logo} alt="logo" style={{ color: "white" }} />
              <p className="fs-6 text-white mt-3">
                Edumodo is perfectly suitable for school, college and university
                website with online education system.
              </p>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <h3 className="fs-4 fw-bold text-white mb-4">Support</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Online
                    Documentation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> How to Start A
                    Course
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Create A Support
                    Ticket
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Our Refund Policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <h3 className="fs-4 fw-bold text-white mb-4">Resources</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Upcoming Events
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Terms and
                    Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Become A Teacher
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <FontAwesomeIcon icon={faChevronRight} /> Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <h3 className="fs-4 fw-bold text-white mb-4">Our Address</h3>
              <p className="text-white">EDUMODO, Dhaka 1211</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#05274B", padding: "30px" }}>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div>
                <p className="text-white fs-5">Copyright &copy; Rafti 2023</p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="me-5 d-flex justify-content-end">
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.facebook.com/iftekhar.rafti"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.twitter.com"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.instagram.com"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.linkedin.com"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.youtube.com"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.skype.com"
                >
                  <FontAwesomeIcon icon={faSkype} />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.snapchat.com"
                >
                  <FontAwesomeIcon icon={faSnapchat} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
