import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleInstructor from "../../../Components/SingleInstructor/SingleInstructor";

const AboutExpertInstructor = () => {
  // // Instructor Data fetching from the server
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors/home");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="py-5 my-4">
      <h2 className="fs-1 fw-bold text-center mb-5" style={{fontFamily: 'Merriweather'}}>Our Expert Instructor</h2>

      <Container>
        <Row>
          {instructors.map((instructor) => (
            <SingleInstructor key={instructor._id} instructor={instructor} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutExpertInstructor;
