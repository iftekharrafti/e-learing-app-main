import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../../Components/Loading/Loading";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import SingleInstructor from "../../Components/SingleInstructor/SingleInstructor";

const Instructors = () => {
  const {data: instructors = [], isLoading} = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/instructors")
        const data = await res.json();
        return data;
    }
  })

  return (
    <div className="my-5">
        <PagesHeader title="Instructors" sub="Instructors" />
      <h2 className="fs-1 fw-bold text-center mb-4 mt-5">Our Expert Instructor</h2>

      <Container>
      {isLoading && (
          <Loading />
        )}
        <Row>
          {instructors.map((instructor) => (
            <SingleInstructor key={instructor._id} instructor={instructor} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Instructors;