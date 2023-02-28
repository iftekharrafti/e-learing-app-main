import React, { useContext } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { CourseContext } from "../../../contexts/CourseProvider";
import { actionTypes } from "../../../state/actionTypes";

const AllCourses = () => {
  const { state, dispatch } = useContext(CourseContext);

  const handleCourseDelete = async (id) => {
    const deletedItem = window.confirm(
      "Are you sure, you want to Delete the course?"
    );

    if (deletedItem) {
      try {
        const response = await fetch(
          `https://e-learning-app-i5dn.onrender.com/course/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          dispatch({ type: actionTypes.DELETE_COURSE, payload: id });
          toast.success("Course Deleted Successfully.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="shadow rounded" style={{ background: "#fff" }}>
      {/* My Courses title */}
      <h2
        className="fs-2 fw-bold text-center py-4"
        style={{ fontFamily: "Merriweather" }}
      >
        All courses
      </h2>

      {/* if user checkout any product then show the product as a table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.courses.map((course) => (
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
              <td>${course.price}</td>
              <td>
                <Button variant="primary">Edit</Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleCourseDelete(course._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllCourses;
