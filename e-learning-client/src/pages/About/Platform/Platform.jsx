import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import platform from "../../../assets/photos/about/platform.jpg";
import resource from "../../../assets/photos/about/resource.png";
import teacher from "../../../assets/photos/about/teacher.png";
import customerService from "../../../assets/photos/about/customer-service.png";
import Bounce from "react-reveal/Bounce";

const Platform = () => {
  return (
    <div style={{ background: "#F5F5F5", padding: "70px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <Bounce left>
              {/* Platform Image */}
              <Image
                src={platform}
                alt="about platform"
                className="img-fluid rounded mb-4"
              />
            </Bounce>
          </Col>
          <Col md={6} sm={12}>
            <Bounce right>
              <div className="p-4">
                {/* Platform Header */}
                <h2 className="fs-1 fw-bold mb-4">
                  Best Online Learning platform
                </h2>
                {/* Platform High Quality Resources icon and details */}
                <div className="d-flex align-items-center">
                  <Image
                    src={resource}
                    alt="resource"
                    className="img-fluid"
                    style={{ width: "80px" }}
                  />
                  <div className="ms-4">
                    <h4 className="fs-4 fw-bold mb-2">
                      High Quality Resources
                    </h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>
                {/* Platform Expert Instructor icon and details */}
                <div className="d-flex align-items-center">
                  <Image
                    src={teacher}
                    alt="resource"
                    className="img-fluid"
                    style={{ width: "80px" }}
                  />
                  <div className="ms-4">
                    <h4 className="fs-4 fw-bold mb-2">Expert Instructor</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>
                {/* Platform Dedicated support icon and details */}
                <div className="d-flex align-items-center">
                  <Image
                    src={customerService}
                    alt="resource"
                    className="img-fluid"
                    style={{ width: "80px" }}
                  />
                  <div className="ms-4">
                    <h4 className="fs-4 fw-bold mb-2">Dedicated Support</h4>
                    <p className="fs-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Platform;
