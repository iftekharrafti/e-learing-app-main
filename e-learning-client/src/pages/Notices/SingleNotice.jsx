import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleNotice = ({ notice }) => {
  const { img, title, date, description } = notice;
  return (
    <Col md={4} sm={6} xs={12}>
      <div style={{ background: "#fff", marginBottom: "25px", borderRadius: '10px' }}>
      <Link to={`/notice/${notice._id}`}>
        <Image className="img-fluid" src={img} alt="instructor" style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
        </Link>
        <div className="p-4">
          <Link to={`/notice/${notice._id}`} className="text-black text-decoration-none">
            <h4 className="fs-4">{title}</h4>
          </Link>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: "#377dff" }}
            />
            <p className="mb-0 ms-2">{date}</p>
          </div>
          <p className="">{description.slice(0, 100)}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleNotice;