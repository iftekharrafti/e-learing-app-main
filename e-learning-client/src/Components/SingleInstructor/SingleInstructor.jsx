import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const SingleInstructor = ({ instructor }) => {
  const { _id, name, img, subject } = instructor;
  return (
    <Col md={3} sm={12} xs={12}>
      {/* Instructor all data show */}
      {/* Instructor Card */}
      <Zoom>
        <div style={{ background: "#F5F5F5", marginBottom: "25px" }}>
          <Image
            style={{ width: "100%" }}
            className="img-fluid"
            src={img}
            alt="instructor"
          />
          <div className="p-3">
            <Link
              to={`/instructor/${_id}`}
              className="text-black text-decoration-none"
            >
              <h4 className="text-center">{name}</h4>
            </Link>
            <p className="text-center">{subject}</p>
          </div>
        </div>
      </Zoom>
    </Col>
  );
};

export default SingleInstructor;
