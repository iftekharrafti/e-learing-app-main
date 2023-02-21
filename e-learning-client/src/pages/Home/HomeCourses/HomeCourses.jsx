import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, Row } from "react-bootstrap";
import PrimaryButton from "../../../Components/PrimaryButton";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import HomeCourse from "./HomeCourse";

const HomeCourses = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/courses/home");
      const data = res.json();
      return data;
    },
  });


  return (
    <div style={{ background: "#F5F5F5", padding: "70px 0" }}>
      <div className="mb-5">
        <h4 className="fs-6 text-primary text-center">COURSES</h4>
        <h2 className="fs-1 fw-bold text-center">Our Popular Courses</h2>
      </div>
      {
        isLoading && <Loading />
      }

      <Container>
        <Row>
          {courses?.map((course) => (
            <HomeCourse key={course._id} course={course} />
          ))}
        </Row>
      </Container>
      <div className="text-center">
        <Link to="/courses">
          <PrimaryButton background="#377DFF" color="#FFFFFF">
            Browse All Courses
            <FontAwesomeIcon className="ms-2" icon={faAngleDoubleRight} />
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HomeCourses;