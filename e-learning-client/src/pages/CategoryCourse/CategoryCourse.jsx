import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { CourseContext } from "../../contexts/CourseProvider";
import HomeCourse from "../Home/HomeCourses/HomeCourse";

const CategoryCourse = () => {
  const { categoryTitle } = useParams();

  const { state } = useContext(CourseContext);

  return (
    <div>
      <PagesHeader title={categoryTitle} sub="Category" sub2={categoryTitle} />
      <Container className="mb-4 mt-5">
        <Row>
          {state.courses
            ?.filter((course) => course.category === categoryTitle)
            .map((course) => (
              <HomeCourse course={course} key={course._id} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryCourse;
