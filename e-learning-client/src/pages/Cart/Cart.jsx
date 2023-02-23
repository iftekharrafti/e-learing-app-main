import React, { useContext } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { CourseContext } from "../../contexts/CourseProvider";
import { actionTypes } from "../../state/actionTypes";
import emptyCart from "../../assets/photos/empty-shopping-cart.jpg";
import PrimaryButton from "../../Components/PrimaryButton";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(CourseContext);

  const handleDelete = (course) => {
    const deletedItem = window.confirm("Are you sure, you want to remove the course on Cart?")

    if(deletedItem){
      dispatch({
        type: actionTypes.REMOVE_CART,
        payload: course._id,
        price: course.price,
      })
    }
  }

  return (
    <div style={{ padding: "0 0 50px 0" }}>
      <Container>
        <Row>
          {/* Cart header & product information show */}
          <Col md={8} sm={12}>
            <h2 className="text-center my-3 fs-2 fw-bold" style={{fontFamily: 'Merriweather'}}>Shopping Cart</h2>
            <p>{state.cart.length} Courses in Cart</p>

            {/* product show as a table */}
            {state.cart.length ? (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {state.cart.map((course) => (
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
                        <Button
                          onClick={() => handleDelete(course)}
                        >
                          Remove
                        </Button>{" "}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>

              // If product are not in the cart then show empty box
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 shadow p-4">
                <Image src={emptyCart} alt="cart" style={{ width: "250px" }} />
                <p>Your cart is empty. Keep shopping to find a course!</p>
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
          <Col md={4} sm={12}>
            {/* Total cost and Add to cart */}
            <div className="bg-white mt-5 p-5 mb-4 shadow rounded">
              <h3 style={{fontFamily: 'Merriweather'}}>Total</h3>
              <h4>${state.subTotal}</h4>
              {
                state.cart?.length ? <Button
                style={{ width: "100%", marginTop: "20px" }}
                variant="primary"
                onClick={() => dispatch({type: actionTypes.CHECKOUT, payload: state.cart})}
              >
                <Link className="text-white text-decoration-none fs-5" to="/dashboard">Checkout</Link>
              </Button>
              :
              // when click the checkout then cart are empty and hit the reducer function and product send to dashboard
              <Button disabled
                style={{ width: "100%", marginTop: "20px" }}
                variant="primary"
                onClick={() => dispatch({type: actionTypes.CHECKOUT, payload: state.cart})}
              >
                <Link className="text-white text-decoration-none fs-5" to="/dashboard">Checkout</Link>
              </Button>
              }
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
