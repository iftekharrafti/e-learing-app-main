import React from "react";
import { Container, Row } from "react-bootstrap";
import student1 from "../../../assets/photos/client/client-1.jpg";
import student2 from "../../../assets/photos/client/client-2.jpg";
import student3 from "../../../assets/photos/client/client-3.jpg";
import SingleStudent from "../../../Components/SingleStudent/SingleStudent";

const Students = () => {
  const students = [
    {
      _id: 1,
      img: student1,
      title: "Excellent Customer Support",
      description:
        "Edumodo is the best learning platform in the world. Their all courses are very helpful",
      rating: 5,
    },
    {
      _id: 2,
      img: student2,
      title: "Highly Recommended",
      description:
        "Edumodo is the best learning platform in the world. Their all courses are very helpful",
      rating: 5,
    },
    {
      _id: 3,
      img: student3,
      title: "Excellent Customer Support",
      description:
        "Edumodo is the best learning platform in the world. Their all courses are very helpful",
      rating: 5,
    },
  ];
  return (
    <div className="py-5">
      {/* Students Header */}
      <h4 className="fs-6 text-primary text-center">TESTIMONIAL</h4>
      <h2 className="fs-1 fw-bold text-center mb-4">What Students Say?</h2>
      <Container>
        {/* All Students */}
        <Row>
          {students.map((student) => (
            <SingleStudent key={student._id} student={student} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Students;
