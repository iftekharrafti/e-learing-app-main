import React from "react";
import { Col, Image } from "react-bootstrap";
import Rotate from "react-reveal/Rotate";
import { Link } from "react-router-dom";
import './Category.css'

const Category = ({ img, title, courses }) => {
  return (
    <Col lg={3} md={6} sm={12} xs={12}>
      {/* Category Card */}
      <Rotate bottom left>
        <div className="shadow rounded mb-4">
          <div className="categoryImg">
            <Image className="imgHover img-fluid rounded-top rounded-right mb-3" src={img} alt="Category" />
          </div>
          <Link to={`/category/${title}`} className="text-black text-decoration-none">
            <h2 className="fs-3 fw-bold text-center mb-0 mt-3"  style={{fontFamily: 'Lato'}}>{title}</h2>
          </Link>
          <h4 className="fs-5 text-center pb-4">{courses}</h4>
        </div>
      </Rotate>
    </Col>
  );
};

export default Category;
