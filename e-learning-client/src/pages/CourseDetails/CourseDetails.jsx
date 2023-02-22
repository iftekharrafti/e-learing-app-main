import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark as regularBookmark,
  faStar as regularStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faStar as solidStar,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import Rating from "react-rating";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { actionTypes } from "../../state/actionTypes";
import { CourseContext } from "../../contexts/CourseProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [cart, setCart] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const { dispatch } = useContext(CourseContext);

  const { data: course = {}, isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch(
        `https://e-learning-app-i5dn.onrender.com/course/${courseId}`
      );
      const data = res.json();
      return data;
    },
  });
  const { img, title, description, category, price, rating, hours, minutes } =
    course;

  const handleCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: course,
      price: course.price,
    });
    setCart(true);
    toast.success("Course Added to Cart");
  };

  const handleBookmark = () => {
    dispatch({ type: actionTypes.ADD_TO_BOOKMARK, payload: course });
    setBookmark(true);
    toast.success("Added To Bookmark");
  };

  return (
    <div style={{ background: "#EDF0F2", padding: "0 0 50px 0" }}>
      <PagesHeader title={title} sub="Course" sub2={title} />

      {isLoading && <Loading />}

      <Container>
        <div className="d-flex justify-content-between my-5">
          <div>
            <Rating
              style={{ color: "#F39C12" }}
              initialRating={rating}
              readonly
              fullSymbol={<FontAwesomeIcon icon={solidStar} />}
              emptySymbol={<FontAwesomeIcon icon={regularStar} />}
            />
            <span className="ms-2">{rating} Star</span>
            <p>
              Categories: <span className="fw-bold">{category}</span>
            </p>
          </div>
          <div className="d-flex align-items-center">
            {bookmark ? (
              <button className="d-flex align-items-center border-0 ">
                <FontAwesomeIcon icon={solidBookmark} />
                <p className="ms-2 mb-0">Wishlist</p>
              </button>
            ) : (
              <button
                className="d-flex align-items-center border-0 "
                onClick={handleBookmark}
              >
                <FontAwesomeIcon icon={regularBookmark} />
                <p className="ms-2 mb-0">Wishlist</p>
              </button>
            )}
          </div>
        </div>

        <Row>
          <Col lg={8} md={12} sm={12}>
            <Image className="img-fluid" src={img} alt="Course" />
            <h3 className="my-3" style={{ fontFamily: "Merriweather" }}>
              About Course
            </h3>
            <p style={{ lineHeight: "25px" }}>{description}</p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="bg-white p-5 mb-4 shadow rounded">
              <h3>${price}</h3>
              {cart ? (
                <>
                  <Link to="/cart" className=" text-decoration-none">
                    {" "}
                    <Button
                      style={{ width: "100%", marginTop: "20px" }}
                      variant="primary"
                    >
                      <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                      Go to cart
                    </Button>{" "}
                  </Link>
                </>
              ) : (
                <Button
                  onClick={handleCart}
                  style={{ width: "100%", marginTop: "20px" }}
                  variant="primary"
                >
                  <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                  Add to Cart
                </Button>
              )}
            </div>
            <div className="bg-white p-5 shadow rounded">
              <h3 style={{ fontFamily: "Merriweather" }}>Material Includes</h3>
              <ul>
                <li>
                  {hours} hours {minutes} minutes
                </li>
                <li>Full lifetime access</li>
                <li>Access on mobile and laptop</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;
