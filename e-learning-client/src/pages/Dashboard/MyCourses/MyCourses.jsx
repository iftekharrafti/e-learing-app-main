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
      <h2 className="fs-2 fw-bold text-center py-4">My courses</h2>
      {state.checkout.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Remove</th>
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
                <td className="fw-bold">${course.price}</td>
                <td>
                  <Button
                    onClick={() =>
                      dispatch({
                        type: actionTypes.REMOVE_CART,
                        payload: course._id,
                        price: course.price,
                      })
                    }
                  >
                    Remove
                  </Button>{" "}
                </td>
              </tr>
          ))}
          <tr>
            <td></td>
            <td className="text-right">Total</td>
            <td className="fw-bold">
              ${state.checkoutTotal}
            </td>
            <td></td>
          </tr>
          </tbody>
        </Table>
      ) : (
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
