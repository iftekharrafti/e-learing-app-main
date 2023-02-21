import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../../assets/photos/banner.png";
import PrimaryButton from "../../../Components/PrimaryButton";
import background from "../../../assets/photos/bg.png";
import Fade from "react-reveal/Fade";

const Banner = () => {
  // Banner Component
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundSize: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Home Banner Left Side */}
          <Col sm={12} md={6} className="py-4 pe-4">
            <Fade left>
              <h4 className="fs-6 text-primary" style={{fontFamily: 'Merriweather'}}>
                IMPROVE YOUR SKILL & GROW YOUR CAREER
              </h4>
              <h2 className="fs-1 fw-bold" style={{fontFamily: 'Merriweather'}}>
                Learn from the best learning platform
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <PrimaryButton
                background="#377DFF"
                color="#FFFFFF"
                className="mt-4"
              >
                Our Courses
              </PrimaryButton>
            </Fade>
          </Col>
          <Col sm={12} md={6}>
            {/* Home Banner Right Side Image */}
            <Fade right>
              <img className="img-fluid" src={banner} alt="" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
