import React, { useContext, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import Course from "../../Components/Course/Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../RemoveFocus.css";
import Loading from "../../Components/Loading/Loading";
import { CourseContext } from "../../contexts/CourseProvider";
import { actionTypes } from "../../state/actionTypes";

const Courses = () => {
  const [search, setSearch] = useState("");
  const { state, dispatch } = useContext(CourseContext);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: actionTypes.SORTING_VALUE, payload: selectedValue });
  };

  return (
    <div style={{ background: "#EDF0F2" }}>
      <PagesHeader title="Courses" sub="Courses" />
      <Container>
        <div className="d-flex flex-wrap justify-content-between mt-5 mb-2">
          <div className="d-flex items-center">
            <InputGroup className="mb-3 d-flex">
              <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Search"
                className="remove-focus"
                onChange={(event) => setSearch(event.target.value)}
              />
            </InputGroup>
          </div>
          <Form.Select
            id="mySelect"
            onChange={(event) => handleChange(event)}
            aria-label="Small select example"
            style={{ width: "250px" }}
            className="remove-focus"
          >
            <option value="lowHigh">Course Price (Low-High)</option>
            <option value="HighLow">Course Price (High-Low)</option>
            <option value="atoz">Course Title (a-z)</option>
            <option value="ztoa">Course Title (z-a)</option>
          </Form.Select>
        </div>
        {state.loading && <Loading />}
        <Row>
          <Col md={3}>
            <ul>
              <li>Deve</li>
              <li>desi</li>
              <li>business</li>
            </ul>
          </Col>
          <Col md={9}>
            <Row>
              {state.courses
                ?.filter((course) => {
                  if (search === "") return course;
                  if (
                    course.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return course;
                  }
                })
                .map((course) => (
                  <Course key={course._id} course={course} />
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
