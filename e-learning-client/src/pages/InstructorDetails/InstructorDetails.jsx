import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import { useParams } from 'react-router-dom';

const InstructorDetails = () => {
  const { instructorId } = useParams();
  const [instructor, setInstructor] = useState({});
  
  const {name, email, img, subject, number, education, expericence, Degree, about} = instructor;

    const iconDesign = {
        width: '45px', 
        height: '45px', 
        borderRadius: '50%', 
        background: "#1D6AF8"
    }

    useEffect(() => {
      fetch(`http://localhost:5000/instructor/${instructorId}`)
      .then(res => res.json())
      .then(data => setInstructor(data))
    },[instructorId])

  return (
    <div style={{ background: "#EDF0F2", padding: "0 0 50px 0" }}>
      <PagesHeader title={name} sub="Instructor" sub2={name} />
      <Container>
        <div
          style={{ background: "#fff", padding: "25px 25px", margin: "40px 0" }}
        >
          <Row>
            <Col md={4} sm={12}>
              <Image src={img} alt="instructor" className="img-fluid" style={{width: '100%'}} />
              <div style={{ background: "#EDF0F2", marginBottom: '30px' }}>
                <div
                  className="w-100 text-center text-white py-2"
                  style={{ background: "#1D6AF8" }}
                >
                  <h3>{name}</h3>
                </div>
                <div className="ps-3 py-4">
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <p className="ms-2 mb-0">{subject}</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="ms-2 mb-0">{email}</p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="ms-2 mb-0">{number}</p>
                  </div>
                <div className="d-flex">
                    <div style={iconDesign} className="d-flex justify-content-center align-items-center me-2">
                        <FontAwesomeIcon icon={faFacebook} style={{color: 'white'}} />
                    </div>
                    <div style={iconDesign} className="d-flex justify-content-center align-items-center me-2">
                        <FontAwesomeIcon icon={faTwitter} style={{color: 'white'}} />
                    </div>
                    <div style={iconDesign} className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: 'white'}} />
                    </div>
                </div>
                </div>
              </div>
            </Col>
            <Col md={8} sm={12}>
              <div className="mb-3">
                <h3>About</h3>
                <p>
                  {about}
                </p>
              </div>
              <div className="mb-3">
                <h3>Degree</h3>
                <p>
                  {Degree}
                </p>
              </div>
              <div className="mb-3">
                <h3>Education</h3>
                <p>
                  {education}
                </p>
              </div>
              <div className="mb-3">
                <h3>Experience</h3>
                <p>
                  {expericence}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default InstructorDetails;
