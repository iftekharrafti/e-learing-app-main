import React, { useContext } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { CourseContext } from "../../contexts/CourseProvider";
import emptyCart from "../../assets/photos/empty-shopping-cart.jpg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";
import { actionTypes } from "../../state/actionTypes";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Bookmark = () => {
  // Get product from the global function
  const { state, dispatch } = useContext(CourseContext);

  // When click addCart then goto reducer function and add cart to the state
  const handleCart = (course) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: course,
      price: course.price
    });
    dispatch({
      type: actionTypes.REMOVE_BOOKMARK,
      payload: course._id,
    })
    toast.success("Course Added to Cart");
  };

  // Bookmark e je course gulo add kora hoiche tar id gulo array akare niye nicci....
  const bookmarkIdArray = state.bookmark.map(bookmark => bookmark._id)

  // Bookmark er id gulor sathe mil ache emn cart and checkout er id gulo array akare niye nicci
  const cartCheckoutIdArray = bookmarkIdArray.filter(id => state.cart.concat(state.checkout).some(course => course._id === id));

  return (
    <div style={{ padding: "0 0 50px 0" }}>
      <Container>
        <Row>
          <Col md={12} sm={12}>
            {/* Bookmark header & product information show */}
            <h2 className="text-center my-3 fs-2 fw-bold" style={{fontFamily: 'Merriweather'}}>BookMark Product</h2>
            <p>{state.bookmark.length} Courses in Bookmark</p>
            {/* product show as a table */}
            {state.bookmark.length ? (
              <Table
                responsive
                striped
                bordered
                hover
                className="text-center mb-4"
              >
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Add To Cart</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                {state.bookmark.map((course) => (
                  <tbody key={course._id}>
                    <tr>
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
                          className="text-black text-decoration-none"
                        >
                          {course.title}
                        </Link>
                      </td>
                      <td>${course.price}</td>
                      <td>
                        {/* Course id ta mile gele disabled nahoy abled */}
                        {
                          cartCheckoutIdArray.includes(course._id) ? <Button disabled>
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faCartShopping}
                          />
                          Add To Cart
                        </Button>
                        : 
                        <Button onClick={() => handleCart(course)}>
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faCartShopping}
                          />
                          Add To Cart
                        </Button>
                        }
                        
                      </td>
                      <td>
                        <Button
                          onClick={() =>
                            dispatch({
                              type: actionTypes.REMOVE_BOOKMARK,
                              payload: course._id,
                            })
                          }
                        >
                          Remove
                        </Button>{" "}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            ) : (
              // If product are not in the bookmark then show empty box
              <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 shadow p-4">
                <Image src={emptyCart} alt="cart" style={{ width: "250px" }} />
                <p>Your bookmark is empty. Keep shopping to find a course!</p>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bookmark;
