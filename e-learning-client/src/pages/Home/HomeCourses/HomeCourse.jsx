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
import { CourseContext } from "../../../contexts/CourseProvider";
import { actionTypes } from "../../../state/actionTypes";
import Zoom from "react-reveal/Zoom";

const HomeCourse = ({ course }) => {
  const { _id, img, title, price, rating } = course;
  const [newRating, setNewRating] = useState(rating);
  const [bookmark, setBookmark] = useState(false);
  const [cart, setCart] = useState(false);

  const { dispatch } = useContext(CourseContext);

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

  // Bookmark icons handle
  const handleBookmark = () => {
    dispatch({ type: actionTypes.ADD_TO_BOOKMARK, payload: course });
    setBookmark(true);
    toast.success("Added To Bookmark");
  };

  // Cart icons handle
  const handleCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: course,
      price: course.price,
    });
    setCart(true);
    toast.success("Course Added to Cart");
  };

  return (
    <Col lg={4} md={6} sm={12} xs={12}>
      <Zoom>
        <div className="shadow mb-4 rounded">
          {/* Bookmark icons here */}
          <div style={{ position: "relative" }}>
            <Link to={`/course/${_id}`}>
              <Image src={img} className="img-fluid rounded-top rounded-right" alt="course" />
            </Link>
            {bookmark ? (
              <button style={bookMark} onClick={handleBookmark} disabled>
                <FontAwesomeIcon
                  icon={solidBookmark}
                  style={{ color: "#3e64de" }}
                />
              </button>
            ) : (
              <button style={bookMark} onClick={handleBookmark}>
                <FontAwesomeIcon
                  icon={regularBookmark}
                  style={{ color: "#3e64de" }}
                />
              </button>
            )}
          </div>
          <div className="p-4">
            {/* Title Rating Price information */}
            <Link
              to={`/course/${_id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <h3 className="fs-4 fw-bold mt-0">{title}</h3>
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
            <div className="d-flex justify-content-between">
              <h5 className="text-primary">${price}</h5>
              {cart ? (
                <Button
                  className="me-2"
                  style={{
                    background: "transparent",
                    border: "1px solid #377dff",
                    color: "#377dff",
                  }}
                >
                  
                  {/* Cart icons here */}
                  <Link to="/cart" className=" text-decoration-none">
                    <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                    Go to cart
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

export default HomeCourse;
