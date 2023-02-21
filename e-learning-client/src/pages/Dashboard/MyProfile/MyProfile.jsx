import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user.email]);
  return (
    <div style={{ background: "#EDF0F2" }}>
      <Container>
        <Row>
          <div
            className="d-flex justify-content-center my-5"
            style={{ width: "100%" }}
          >
            <Col md={6}>
              <div
                style={{
                  background: "#fff",
                  padding: "60px 50px",
                  borderRadius: "20px",
                }}
              >
                {/* Form header and login Form data */}
                <h2 className="fs-2 mb-4" style={{fontFamily: 'Merriweather'}}>My Profile</h2>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="text"
                    value={userInfo.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="remove-focus"
                    size="lg"
                    type="email"
                    value={userInfo.email}
                  />
                </Form.Group>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
