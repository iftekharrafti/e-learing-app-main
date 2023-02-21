import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faQuoteLeft,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image } from "react-bootstrap";
import Rating from "react-rating";
import Slide from "react-reveal/Slide";

const SingleStudent = ({ student }) => {
  const { title, description, rating, img } = student;

  return (
    <Col md={4} sm={12} xs={12}>
      {/* Student Card are here */}
      <Slide bottom>
        <div
          className="text-center mb-3"
          style={{ background: "#F5F5F5", padding: "45px 25px" }}
        >
          {/* Card title, description, image, and Rating */}
          <FontAwesomeIcon className="fs-1 text-primary" icon={faQuoteLeft} />
          <h4 className="fs-5 fw-bold">{title}</h4>
          <p className="fs-6">{description}</p>
          <p>
            <Rating
              style={{ color: "#F39C12" }}
              initialRating={rating}
              fullSymbol={<FontAwesomeIcon icon={solidStar} />}
              emptySymbol={<FontAwesomeIcon icon={regularStar} />}
              readonly={true}
            />
          </p>
          <Image
            src={img}
            style={{ width: "65px", height: "65px", borderRadius: "50%" }}
            alt="Students"
          />
        </div>
      </Slide>
    </Col>
  );
};

export default SingleStudent;
