import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faBookmark,
  faCartPlus,
  faGauge,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faSnapchat,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React, { useContext } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { CourseContext } from "../../contexts/CourseProvider";
import "./TopNavbar.css";

const TopNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { state } = useContext(CourseContext);
  return (
    <div style={{ background: "#1D6AF8" }} className="topNavbar py-2">
      <Container>
        <div className="topNavbarLarge">
          {/* Top Navbar Content Large Screen */}
          <Row>
            <Col md={6} xs={12}>
              {/* Contact Number & Email Address*/}
              <div className="text-white d-flex py-2 contact">
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
            </Col>
            <Col md={6} xs={12}>
              <div className="d-flex align-items-center justify-content-end">
                {/* Social Media Icons */}
                <div className="me-5">
                  <a
                    className="text-white me-2"
                    href="https://www.facebook.com/iftekhar.rafti"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="text-white me-2" href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="text-white me-2"
                    href="https://www.instagram.com"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="text-white me-2"
                    href="https://www.linkedin.com"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a className="text-white me-2" href="https://www.youtube.com">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a className="text-white me-2" href="https://www.skype.com">
                    <FontAwesomeIcon icon={faSkype} />
                  </a>
                  <a
                    className="text-white me-2"
                    href="https://www.snapchat.com"
                  >
                    <FontAwesomeIcon icon={faSnapchat} />
                  </a>
                </div>

                {/* Shopping Cart & Bookmark icon */}
                <div>
                  <Link
                    to="/cart"
                    className="text-decoration-none"
                    style={{ color: "#fff" }}
                  >
                    <span className="me-4 position-relative">
                      <FontAwesomeIcon className="fs-6 " icon={faCartPlus} />
                      <Badge
                        className="position-absolute bg-white text-black"
                        style={{ top: "-10px", right: "-18px" }}
                      >
                        {state.cart.length}
                      </Badge>
                    </span>
                  </Link>
                  <Link
                    to="/bookmark"
                    className="text-decoration-none"
                    style={{ color: "#fff" }}
                  >
                    <span className="me-4 position-relative">
                      <FontAwesomeIcon
                        icon={faBookmark}
                        style={{ color: "#fff" }}
                      />
                      <Badge
                        className="position-absolute bg-white text-black"
                        style={{ top: "-10px", right: "-18px" }}
                      >
                        {state.bookmark.length}
                      </Badge>
                    </span>
                  </Link>

                  {/* Login & Dashboard */}
                  {user ? (
                    <>
                      <Button
                        className="me-2"
                        variant="primary"
                        size="sm"
                        style={{ background: "#FFC600", color: "black" }}
                      >
                        <Link
                          to="/dashboard"
                          className="text-black text-decoration-none"
                        >
                          <FontAwesomeIcon className="me-2" icon={faGauge} />
                          Dashboard
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="me-2"
                      variant="primary"
                      size="sm"
                      style={{ background: "#FFC600", color: "black" }}
                    >
                      <Link
                        to="/login"
                        className="text-black text-decoration-none"
                      >
                        <FontAwesomeIcon className="me-2" icon={faLock} />
                        Login
                      </Link>
                    </Button>
                  )}

                  {/* Register & Logout Button */}

                  {user ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={logOut}
                      style={{ background: "#FFC600", color: "black" }}
                    >
                      <Link
                        to="/register"
                        className="text-black text-decoration-none"
                      >
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faArrowRightFromBracket}
                        />
                        Logout
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      style={{ background: "#FFC600", color: "black" }}
                    >
                      <Link
                        to="/register"
                        className="text-black text-decoration-none"
                      >
                        <FontAwesomeIcon className="me-2" icon={faUser} />
                        Register
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* For Small Screen */}
        <div className="topNavbarSmall">
          <div className="d-flex justify-content-between">
          <div>
            {/* Top Navbar Shoppint Cart */}
            <Link
              to="/cart"
              className="text-decoration-none"
              style={{ color: "#fff" }}
            >
              <span className="me-4 position-relative">
                <FontAwesomeIcon className="fs-6 " icon={faCartPlus} />
                <Badge
                  className="position-absolute bg-white text-black"
                  style={{ top: "-10px", right: "-18px" }}
                >
                  {state.cart.length}
                </Badge>
              </span>
            </Link>
            {/* Top Navbar Bookmark */}
            <Link
              to="/bookmark"
              className="text-decoration-none"
              style={{ color: "#fff" }}
            >
              <span className="me-4 position-relative">
                <FontAwesomeIcon icon={faBookmark} style={{ color: "#fff" }} />
                <Badge
                  className="position-absolute bg-white text-black"
                  style={{ top: "-10px", right: "-18px" }}
                >
                  {state.bookmark.length}
                </Badge>
              </span>
            </Link>
            </div>

            {/* Top Navbar Dashboard & Login */}
            <div>
            {user ? (
              <>
                <Button
                  className="me-2"
                  variant="primary"
                  size="sm"
                  style={{ background: "#FFC600", color: "black" }}
                >
                  <Link
                    to="/dashboard"
                    className="text-black text-decoration-none"
                  >
                    <FontAwesomeIcon className="me-2" icon={faGauge} />
                    Dashboard
                  </Link>
                </Button>
              </>
            ) : (
              <Button
                className="me-2"
                variant="primary"
                size="sm"
                style={{ background: "#FFC600", color: "black" }}
              >
                <Link to="/login" className="text-black text-decoration-none">
                  <FontAwesomeIcon className="me-2" icon={faLock} />
                  Login
                </Link>
              </Button>
            )}

              {/* Top Navbar Register & Logout */}
            {user ? (
              <Button
                variant="primary"
                size="sm"
                onClick={logOut}
                style={{ background: "#FFC600", color: "black" }}
              >
                <Link
                  to="/register"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faArrowRightFromBracket}
                  />
                  Logout
                </Link>
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                style={{ background: "#FFC600", color: "black" }}
              >
                <Link
                  to="/register"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon className="me-2" icon={faUser} />
                  Register
                </Link>
              </Button>
            )}
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNavbar;
