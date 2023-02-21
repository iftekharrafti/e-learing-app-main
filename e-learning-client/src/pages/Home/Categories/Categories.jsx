import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import business from "../../../assets/photos/categories/business.jpg";
import design from "../../../assets/photos/categories/design.jpg";
import development from "../../../assets/photos/categories/development.jpg";
import health from "../../../assets/photos/categories/health.jpg";
import PrimaryButton from "../../../Components/PrimaryButton";
import Category from "./Category";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="py-5">
      <h4 className="fs-6 text-primary text-center">
        IMPROVE YOUR SKILL & GROW YOUR CAREER
      </h4>
      <h2 className="fs-1 fw-bold text-center">
        Learn from the best learning platform
      </h2>
      <Container>
        <Row className="py-4">
          <Category img={business} title="Business" courses="3 Courses" />
          <Category img={health} title="Health & Fitness" courses="2 Courses" />
          <Category img={design} title="Design" courses="3 Courses" />
          <Category img={development} title="Development" courses="3 Courses" />
        </Row>
        <div className="text-center">
          <Link to="/courses">
            <PrimaryButton background="#377DFF" color="#FFFFFF">
              Browse All Categories
              <FontAwesomeIcon className="ms-2" icon={faAngleDoubleRight} />
            </PrimaryButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
