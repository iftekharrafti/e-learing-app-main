import React from "react";
import { Col, Image } from "react-bootstrap";
import Rotate from "react-reveal/Rotate";

const Category = ({ img, title, courses }) => {
  return (
    <Col md={3} sm={12} xs={12}>
      <Rotate bottom left>
        <div className="shadow rounded mb-4">
          <Image className="img-fluid rounded-top rounded-right mb-3" src={img} alt="Category" />
          <h2 className="fs-3 fw-bold text-center mb-0">{title}</h2>
          <h4 className="fs-5 text-center pb-4">{courses}</h4>
        </div>
      </Rotate>
    </Col>
  );
};

export default Category;
