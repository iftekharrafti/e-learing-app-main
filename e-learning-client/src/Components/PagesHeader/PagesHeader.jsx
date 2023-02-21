import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pageTitleBg from "../../assets/photos/page-title-bg.jpg";

const PagesHeader = ({ title, sub, sub2 }) => {
  return (
    <div
      style={{
        background: `url(${pageTitleBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "60px 0",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>
      <Container>
        <h3 className="fs-1 fw-bold" style={{fontFamily: 'Merriweather'}}>{title}</h3>
        <Breadcrumb>
          <Breadcrumb.Item className="text-decoration-none">
            <Link className="text-decoration-none text-white fw-bold" to="/">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-decoration-none">
            <Link className="text-decoration-none text-white fw-bold" to="/" active>
              {sub}
            </Link>
          </Breadcrumb.Item>
          {
            sub2 && <Breadcrumb.Item className="text-decoration-none">
            <Link className="text-decoration-none text-white fw-bold" to="/" active>
              {sub2}
            </Link>
          </Breadcrumb.Item>
          }
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default PagesHeader;
