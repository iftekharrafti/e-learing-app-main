import React, { useContext } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton";
import { CourseContext } from "../../../contexts/CourseProvider";
import { actionTypes } from "../../../state/actionTypes";
import emptyCart from "../../../assets/photos/empty-shopping-cart.jpg";
import "./MyCourse.css";

const MyCourses = () => {
  const { state, dispatch } = useContext(CourseContext);

  return (
    <div className="shadow rounded" style={{ background: "#fff" }}>
      {/* My Courses title */}
      <h2 className="fs-2 fw-bold text-center py-4" style={{fontFamily: 'Merriweather'}}>My courses</h2>

      {/* if user checkout any product then show the product as a table */}
      {state.checkout.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
          {state.checkout.map((course) => (
              <tr key={course._id}>
                <td>
                  <Link to={`/course/${course._id}`}>
                    <Image
                      src={course.img}
                      alt="course img"
                      style={{ width: "100px" }}
                    />
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/course/${course._id}`}
                    className="text-black text-decoration-none fw-bold"
                  >
                    {course.title}
                  </Link>
                </td>
              </tr>
          ))}
          </tbody>
        </Table>
      ) : (
        // // If product are not in the checkout then show empty box
        <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 p-4">
          <Image src={emptyCart} alt="cart" className="img" />
          <p>Your chekout is empty. Keep shopping to find a course!</p>
          <Link to="/courses">
            <PrimaryButton
              background="#377DFF"
              color="#FFFFFF"
              className="mt-4"
            >
              Keep Shopping
            </PrimaryButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
