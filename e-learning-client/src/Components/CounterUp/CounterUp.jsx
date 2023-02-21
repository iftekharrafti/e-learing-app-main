import React from "react";
import { Container, Row } from "react-bootstrap";
import CounterCard from "./CounterCard";


const CounterUp = () => {
  return (
    <Container>
      <Row className="py-5">
        {/* Counter Up component. Student information show */}
        <CounterCard digit="1500" symbol="+" name="Enrolled Student" />
        <CounterCard digit="1200" symbol="+" name="Completed Courses" />
        <CounterCard digit="200" symbol="+" name="Course Instructor" />
        <CounterCard digit="99" symbol="%" name="Success Rate" />
      </Row>
    </Container>
  );
};

export default CounterUp;
