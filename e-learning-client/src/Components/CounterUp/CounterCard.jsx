import React from 'react';
import { Col } from 'react-bootstrap';
import CountUp from "react-countup";

const CounterCard = ({digit, symbol, name}) => {
    return (
        <Col lg={3} md={6} sm={12}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="">
              {/* Counter Up Content here */}
              <CountUp className="fs-2 fw-bold" end={digit} duration={3} />
              <span className="fs-2 fw-bold">{symbol}</span>
            </div>
            <p className="fs-5 fw-bold" style={{fontFamily: 'Lato'}}>{name}</p>
          </div>
        </Col>
    );
};

export default CounterCard;