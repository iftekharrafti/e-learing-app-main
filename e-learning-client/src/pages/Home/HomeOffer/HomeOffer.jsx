import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import offerImg from "../../../assets/photos/man-img.png";
import PrimaryButton from "../../../Components/PrimaryButton";
import offerBg from "../../../assets/photos/offer-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Countdown from "react-countdown";
import CountDownRendered from "../../../Components/CountDownRendered/CountDownRendered";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const HomeOffer = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p className="text-white">Offer Finished</p>;
    } else {
      // Render a countdown
      return (
        <CountDownRendered
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  };

  return (
    <div
      style={{
        background: `url(${offerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "35px",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Offer Left Part writing part */}
          <Col sm={12} md={6} className="py-4 pe-4">
            <Fade left>
              <h4 className="fs-6 text-white" style={{fontFamily: 'Merriweather'}}>LIMITED TIME OFFER</h4>
              <h2 className="fs-1 fw-bold text-white" style={{fontFamily: 'Merriweather'}}>
                30% Discount On All Of Our New And Upcoming Courses
              </h2>
              {/* offer count down. Time limit */}
              <Countdown date={Date.now() + 9959900000} renderer={renderer} />
              {/* Offer left side button */}
              <Link to="/courses">
                <PrimaryButton background="white" color="#0D6EFD">
                  Enroll Now
                  <FontAwesomeIcon className="ms-2" icon={faAngleDoubleRight} />
                </PrimaryButton>
              </Link>
            </Fade>
          </Col>
          <Col sm={12} md={6}>
            {/* Offer Right part Image */}
            <Fade right>
              <img className="img-fluid" src={offerImg} alt="" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeOffer;
