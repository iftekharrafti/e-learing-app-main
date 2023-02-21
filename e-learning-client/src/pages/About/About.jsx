import React from "react";
import CounterUp from "../../Components/CounterUp/CounterUp";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import bg from "../../assets/photos/counter-bg.jpg";
import student1 from "../../assets/photos/client/client-1.jpg";
import student2 from "../../assets/photos/client/client-2.jpg";
import student3 from "../../assets/photos/client/client-3.jpg";
import { Container, Row } from "react-bootstrap";
import SingleStudent from "../../Components/SingleStudent/SingleStudent";
import './About.css'
import Platform from "./Platform/Platform";
import BestCourse from "./BestCourse/BestCourse";
import AboutExpertInstructor from "./AboutExpertInstructor/AboutExpertInstructor";

const About = () => {
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
    <div>
      {/* About page Header Component */}
      <PagesHeader title="About Us" sub="About Us" />

      {/* Our Best course component */}
      <BestCourse />

      {/* Student Countup component  */}
      <div className="about"
        style={{
          background: `url(${bg})`
        }}
      >
        <CounterUp />
      </div>

      {/* Students component here */}
      <h2 className="fs-1 fw-bold text-center mt-5 mb-4" style={{fontFamily: 'Merriweather'}}>What Students Say?</h2>
      <Container>
        <Row>
          {students.map((student) => (
            <SingleStudent key={student._id} student={student} />
          ))}
        </Row>
      </Container>

      {/* Platform component */}
      <Platform />

      {/* Our expert instructors component */}
      <AboutExpertInstructor />
    </div>
  );
};

export default About;
