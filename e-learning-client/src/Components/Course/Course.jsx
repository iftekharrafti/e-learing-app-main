import {
  faBookmark as regularBookmark,
  faStar as regularStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faStar as solidStar,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Col, Image } from "react-bootstrap";
import { toast } from "react-hot-toast";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { CourseContext } from "../../contexts/CourseProvider";
import { actionTypes } from "../../state/actionTypes";
import Zoom from "react-reveal/Zoom";
import './Course.css';

const Course = ({ course }) => {
  const { _id, img, title, price, rating } = course;
  const [newRating, setNewRating] = useState(rating);

  const { state, dispatch } = useContext(CourseContext);

  const bookMark = {
    width: "30px",
    height: "30px",
    border: 0,
    background: "#EDF0F2",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  };

  // Course Bookmark Icon
  const addedBookmark = () => {
    dispatch({ type: actionTypes.ADD_TO_BOOKMARK, payload: course });
    toast.success("Course added Bookmark");
  };
  const removeBookmark = () => {
    const remove = window.confirm("Are you sure, you want to remove the course on Bookmark?")
    if(remove){
      dispatch({ type: actionTypes.REMOVE_BOOKMARK, payload: course._id });
      toast.success("Course Remove to Bookmark");
    }
  };

  // Course Cart Button
  const handleCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: course,
      price: course.price,
    });

    toast.success("Course Added to Cart");
  };
  // Cart and checkout e je course gulo add kora hoiche tar id gulo array akare niye segula ke ekta array kora hocche....
  const cartIdArray = state.cart.map(course => course._id);
  const checkoutIdArray = state.checkout.map(course => course._id);
  const cartCheckoutIdArray = cartIdArray.concat(checkoutIdArray)

  // Get Bookmark course id
  const bookmarkIdArray = state.bookmark.map(course => course._id);

  return (
    <Col lg={6} md={12} sm={12} xs={12}>
      <Zoom>
        <div className="course shadow mb-4 rounded" >
          {/* Course Card are here */}
          <div className="courseImg" style={{ position: "relative" }}>
            {/* Course Image and pass the id are routes and singleCourseDetails */}
            <Link to={`/course/${_id}`}>
              <Image src={img} className="imgHover img-fluid rounded-top rounded-right" alt="course" style={{height: '220px', width:'100%'}} />
            </Link>

            {/* Bookmark icon */}
            {bookmarkIdArray.includes(course._id) ? (
              <button style={bookMark} onClick={removeBookmark}>
                <FontAwesomeIcon
                  icon={solidBookmark}
                  style={{ color: "#3e64de" }}
                />
              </button>
            ) : (
              <button style={bookMark} onClick={addedBookmark}>
                <FontAwesomeIcon
                  icon={regularBookmark}
                  style={{ color: "#3e64de" }}
                />
              </button>
            )}
          </div>
          {/* Title Rating Price and others */}
          <div className="p-4">
            <Link
              to={`/course/${_id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <h3 className="fs-4 fw-bold mt-0" style={{fontFamily: 'Lato'}}>{title}</h3>
            </Link>

            <div className="mb-1 d-flex align-items-center">
              <div>
                <Rating
                  style={{ color: "#F39C12" }}
                  initialRating={newRating}
                  onClick={(value) => setNewRating(value)}
                  fullSymbol={<FontAwesomeIcon icon={solidStar} />}
                  emptySymbol={<FontAwesomeIcon icon={regularStar} />}
                />
              </div>
              <p className="my-0 mx-2">{newRating} Reviews</p>
            </div>
            <hr />
            <div className="d-flex flex-wrap justify-content-between">
              <h5 className="text-primary">${price}</h5>

              {/* Shopping cart are here */}
              {/* Course id ta mile gele disabled nahoy abled */}
              {cartCheckoutIdArray.includes(course._id) ? (
                <Button
                  className="me-2"
                  style={{
                    background: "transparent",
                    border: "1px solid #377dff",
                    color: "#377dff",
                  }}
                  disabled
                >
                  <Link to="/cart" className=" text-decoration-none">
                    <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                    Added Cart
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={handleCart}
                  className="me-2"
                  style={{
                    background: "transparent",
                    border: "1px solid #377dff",
                    color: "#377dff",
                  }}
                >
                  <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                  Add to cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </Zoom>
    </Col>
  );
};

export default Course;
