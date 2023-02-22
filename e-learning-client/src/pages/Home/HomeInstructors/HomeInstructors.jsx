import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleInstructor from "../../../Components/SingleInstructor/SingleInstructor";

const HomeInstructors = () => {
  // Instructor Data fetching from the server
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch(
        "https://e-learning-app-i5dn.onrender.com/instructors/home"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="py-5">
      {/* Home Instructors Header */}
      <h4
        className="fs-6 text-primary text-center"
        style={{ fontFamily: "Merriweather" }}
      >
        INSTRUCTOR
      </h4>
      <h2
        className="fs-1 fw-bold text-center mb-4"
        style={{ fontFamily: "Merriweather" }}
      >
        Our Expert Instructor
      </h2>

      <Container>
        {/* Instrutors data loading */}
        <Row>
          {instructors.map((instructor) => (
            <SingleInstructor key={instructor._id} instructor={instructor} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeInstructors;
