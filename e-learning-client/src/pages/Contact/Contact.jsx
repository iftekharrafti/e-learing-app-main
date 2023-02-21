import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { useForm } from "react-hook-form";
import '../RemoveFocus.css';
import './Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContactSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ background: "#F5F5F5" }}>
      {/* Contact page Header */}
      <PagesHeader title="Contact Us" sub="Contact Us" />

      <div className="py-5">
        <Container>
          <Row>
            {/* Contact page left side Email, contact and others */}
            <Col md={5} sm={12}>
              <div className="mb-4">
                <h2 className="fs-2 mb-3" style={{fontFamily: 'Merriweather'}}>Have any Questions?</h2>
                <p className="fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar .
                </p>
              </div>

              <div>
                <div className="d-flex align-items-center mb-2">
                  <div className="fs-1 text-primary">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="ms-3">
                    <h4 className="fs-5 fw-bold mt-3" style={{fontFamily: 'Lato'}}>Email Us</h4>
                    <p>support@example.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="fs-1 text-primary">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="ms-3">
                    <h4 className="fs-5 fw-bold mt-3" style={{fontFamily: 'Lato'}}>Contact Us</h4>
                    <p>+(88) 01254824521</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="fs-1 text-primary">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="ms-3">
                    <h4 className="fs-5 fw-bold mt-3" style={{fontFamily: 'Lato'}}>Office Location</h4>
                    <p>EDUMODO, Dhaka 1211</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7} sm={12}>

              {/* Contact form are here */}
              <div className="contactForm" style={{ background: "#ffffff" }}>
                <Form onSubmit={handleSubmit(handleContactSubmit)}>
                  <div className="contactName">
                    <Form.Group
                      className="contactInnerName mb-3 mr-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                      className="remove-focus"
                        size="lg"
                        type="text"
                        {...register("firstName", { required: true })}
                        placeholder="First Name"
                      />
                      {errors.firstName && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group className="contactInnerName mb-3" controlId="formBasicEmail">
                      <Form.Control
                      className="remove-focus"
                        size="lg"
                        type="text"
                        {...register("lastName", { required: true })}
                        placeholder="Last Name"
                      />
                      {errors.lastName && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    className="remove-focus"
                      size="lg"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    className="remove-focus"
                      size="lg"
                      type="text"
                      {...register("subject", { required: true })}
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      className="remove-focus"
                      size="lg"
                      as="textarea"
                      {...register("message", { required: true })}
                      rows={3}
                      placeholder="Your Message"
                      style={{resize: 'none'}}
                    />
                    {errors.message && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </Form.Group>

                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {/* Google map show */}
        <iframe
          title="presentMaps"
          className="px-2 pb-2"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116882.2374410768!2d90.4031032!3d23.727047799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1675062259439!5m2!1sen!2sbd"
          width="100%"
          height="550"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
