import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import student1 from "../../../assets/photos/about/student1.jpg";
import student2 from "../../../assets/photos/about/student2.jpg";
import student3 from "../../../assets/photos/about/student3.jpg";
import Slide from "react-reveal/Slide";

const BestCourse = () => {
  return (
    <div style={{ background: "#F5F5F5", padding: "70px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} sm={12} className="p-4">
            {/* Best course Details */}
            <Slide left>
              <h3 className="fs-1 fw-bold" style={{fontFamily: 'Merriweather'}}>
                We Are Providing The Best The Best Online Course
              </h3>
              <p style={{ color: "#4b5158" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
            </Slide>
          </Col>
          <Col md={7} sm={12}>
            {/* Best course Image */}
            <Slide right>
              <Row>
                <Col md={6} sm={12}>
                  <Image
                    src={student1}
                    alt="student"
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "93%" }}
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Image
                    src={student2}
                    alt="student"
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "45%", marginBottom: "4%" }}
                  />
                  <Image
                    src={student3}
                    alt="student"
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "45%" }}
                  />
                </Col>
              </Row>
            </Slide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BestCourse;
