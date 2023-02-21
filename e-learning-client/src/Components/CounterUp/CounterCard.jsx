import React from 'react';
import { Col } from 'react-bootstrap';
import CountUp from "react-countup";

const CounterCard = ({digit, symbol, name}) => {
    return (
        <Col md={3} sm={12} xs={12}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="">
              <CountUp className="fs-2 fw-bold" end={digit} duration={3} />
              <span className="fs-2 fw-bold">{symbol}</span>
            </div>
            <p className="fs-5 fw-bold">{name}</p>
          </div>
        </Col>
    );
};

export default CounterCard;